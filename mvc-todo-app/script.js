class Model {
    constructor() {
        //state of the model, array of todo objects
        this.todos = JSON.parse(localStorage.getItem('todos')) || []
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    _commit(todos) {
        this.onTodoListChanged(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        }

        this.todos.push(todo)

        this._commit(this.todos)
    }

    //map through all todos, and replace th text of the todo with the specified
    editTodo(id, updatedText) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? {id: todo.id, text: updatedText, complete: todo.complete} : todo,
            )

            this._commit(this.todos)
    }

    //filter a todo out of the array by id
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id)

        this._commit(this.todos)
    }

    //flip complete boolean on the specified todo
    toggleTodo(id) {
        this.todos = this.todos.map((todo) =>
        this.id === id ? {id: todo.id, text: todo.text, complete: !todo.complete} : todo,
        )

        this._commit(this.todos)
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)

        this.onTodoListChanged(this.todos)
    }
} //mpodel doesn't have anything to do with input, only deals with the actual data being put in the output will be what's displaying
//everything above is all one needs for a fully functioning CRUD app
//which is an app that can be accessed fully through the console

class View {
    constructor() {
        //root element
        this.app = this.getElement('#root')

        //title of the app
        this.title = this.createElement('h1')
        this.title.textContent = 'Todos'

        //form, with a [type="text"] input, and submit button
        this.form = this.createElement('form')

        this.input = this.createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Add todo'
        this.input.name = 'todo'

        this.submitButton = this.createElement('button')
        this.submitButton.textContent = 'Submit'

        //visual rep of todo list
        this.todoList = this.createElement('ul', 'todo-list')

        //append the input and submit button to the form
        this.form.append(this.input, this.submitButton)

        //append the title, form and todo list to the app
        this.app.append(this.title, this.form, this.todoList)

        this._temporaryTodoText
        this._initialLocalListeners()
    } //now parts of the view that won't change are setup

    get _todoText() { //underscore indicates method names that are private/local methods that will not be used outside their class
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }

    //create element with an optional css class
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add.(className)

        return element
    }

    displayTodos(todos) {
        //delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }
        
        //show default message
        if (todos.length === 0) {
            const p = this.createElement('p')
            p.textContent = 'Nothing to do! Add a task?'
            this.todoList.append(p)
        } else {
            //create todo item nodes for each todo in state
            todos.forEach(todo => {
                const li = this.createElement('li')
                li.id = todo.id

                //each todo item will have a checkbox to toggle
                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete

                //todo item text will be in contenteditable span
                const span = this.createElement('span')
                span.contentEditable = true
                span.classList.add('editable')

                //if todo item is complete it will have a strikethrough
                if (todo.complete) {
                    const strike = this.createElement('s')
                    strike.textContent = todo.text
                    span.append(strike)
                } else {
                    //otherwise display the txt
                    span.textContent = todo.text
                }

                //todos will also have a delete button
                const deleteButton = this.createElement('button', 'delete')
                deleteButton.textContent = 'Delete'
                li.append(checkbox, span, deleteButton)

                //appends nodes to the todo list
                this.todoList.append(li)
            })
        }
    }

    //retrieve element from dom
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault()

            if (this._todoText) {
                handler(this._todoText)
                this._resetInput
            }
        })
    }

    //update temp state
    _initialLocalListeners() {
        this.todoList.addEventListener('input', event => {
            if (event.target.className === 'editable') {
                this._temporaryTodoText = event.target.innerText
            }
        })
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id)

                handler(id)
            }
        })
    }

    //send completed value to the model
    bindEditTodo(handler) {
        this.todoList.addEventListener('focusout', event => {
            if (this._temporaryTodoText) {
                const id = parseInt(event.target.parentElement.id)

                handler(id, this._temporaryTodoText)
                this._temporaryTodoText = ''
            }
        })
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type == 'checkbox') {
                const id = parseInt(event.target.parentElement.id)

                handler(id)
            }
        })
    }
}

class Controller { //linke between the model and what the user sees
    constructor(model, view) {
        this.model = model,
        this.view = view

        this.model.bindTodoListChanged(this.onTodoListChanged)

        this.view.bindAddTodo(this.handleAddTodo)
        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindToggleTodo(this.handleToggleTodo)
        //this.view.bindEditTodo(this.handleEditTodo) - will happen last

        //display initial todos
        this.onTodoListChanged(this.model.todos)

        this.view.bindEditTodo(this.handleEditTodo)
    }

    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos)
    }

    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText)
    }

    handleEditTodo = (id, todoText) => {
        this.model.editTodo(id, todoText)
    }

    handleDeleteTodo = (id) => {
        this.model.deleteTodo(id)
    }

    handleToggleTodo = (id) => {
        this.model.toggleTodo(id)
    }
}

const app = new Controller(new Model(), new View());