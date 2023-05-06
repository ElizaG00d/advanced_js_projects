module.exports = mongoose => {
    const Todo = mongoose.model(
        "tasks",
        mongoose.Schema(
            {
                task: { type: String }
            },
            { collection: 'task' }
        )
    );
    return Todo;
};