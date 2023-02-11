//advanced js challenges file 1

//bitwise operators

//RegExp

//TRY THROW CATCH FINALLY
try {
    addalert("To try.");
}

catch(err) {
    document.getElementById("alert_catch").innerHTML = err.message;
} //will throw up an error in the p id since we used 'addalert' rather than 'alert'
//js executes and catches it

//throw allows a custom error message
let x = document.getElementById("numb").value;
try {
    if(x.trim()== "") throw "empty field";
    if(isNaN(x)) throw "not a number";
}
catch(err) {
    message.innerHTML = "Input is " + err;
}
finally {
    document.getElementById("").value = "";
}

//USE STICT

//"use strict;"

//THIS KEYWORD

const flier = {
    designation : "Raptor",
    color : "Blue",
    id : "776",
    code_sign : function() {
        return this.color + this.id + this.id;
    }
}; //es6 has some short hand version of this object creation i don't remember
//keep in mind this refers to an object, which object depends on how this is being invoked or called
//next challenge was const and let

let y = 7; //declared a variable
//let vars cannot be redeclared, throws an error
//es6 introduced, also hoisted

//JS ARROW FUNCTION
//before arrow
hello = function() {
    return "Hello World!";
}
//with arrow
hello = () => {
    return "Hello World!";
} //they do the same thing
//if the function only has one statement and statement returns a var, you can remove the brackets and the return keyword
hello = () => "Hello World!";
//parameters need to be passed in parentheses
//can also remove them if you want

//this usage comparison
//reg function
hello = function() {
    document.getElementById('demo').innerHTML += this;
}
//window object calls function
window.addEventListener('load', hello);
//button object calls function
document.getElementById('demo').addEventListener('click', hello);
    //this reps the object that calls the function

//arrow function this
hello = () => {
    document.getElementById('demo').innerHTML += this;
}
//window object calls function
window.addEventListener('load', hello);
//button object calls function
document.getElementById('btn').addEventListener('click', hello);

//first example returns 2 diff objects window and button
//second example returns the window object twice, since it's the 'owner' of the function

//CLASS KEYWORD
class Car {
    constructor(creator, model) {
        this.creator = creator;
        this.model = model;
        this.year = year;
    }
    age() {
        let date = new Date();
        return.date.getFullYear() - this.year;
    } //can add other methods as you please along with constructor method

} //can b used to create other objects with it

let car1 = new Car("Fiat", "500", 1974);
//constructor methos is called when a new object is created
document.getElementById('demo').innerHTML =
"My car is " + car1.age() + " years old.";

//DEBUGGER KEYWORD
let x = 15 * 5;
debugger;
document.getElementById('demo').innerHTML = x;

//ES6 METHODS

isFinite(10/0);
//returns false is argument is infinity or nan

//JS FORM VALIDATION

//JS CLASS AND OBJECT CREATION

class Dog {
    constructor(breed, color, height, weight) {
        this.breed = breed,
        this.color = color,
        this.heigh = height,
        this.weight = weight
    }
    status() {
        let day = new Date();
        let hr = day.getHours();
        if (hr < 7) {
            console.log("Dog is laying down.")
        }
        if (hr >= 7) {
            console.log("Dog is sitting.")
        }
        if (hr < 12) {
            console.log("Dog is shaking.")
        }
    }
}

let myDog = new Dog("Shibu", "Brown", "2 Feet", "70lbs");
let Dog2 = new Dog("Hound", "Brown", "2 Feet", "60lbs");
//need to run through this to see if any of this actually works

//SUBCLASS PROJECT
class Shape {
    constructor(color) {
        this.color = color;
    }
    getArea(height, width) {
        let area = this.height * this.width;
        return this.Shape.area == area; //u know, i don't think that's correct in the slightest
        console.log();
    } //area is height x width
}

class Rectangle extends Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        this.radius = radius;
    }
}

//findIndex() method

//Number.isInteger() method

//isFinite() method

//exponentiation operator (**)