module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Tutorial;
}

//mongoose model def
//reps tutorials collection in db
//fields generated automatically for each doc

//model supports crud functions