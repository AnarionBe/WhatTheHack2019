import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        languages: [
            {
                type: String,
            },
        ],
        typeActivities: [
            {
                type: String,
            },
        ],
        date: {
            type: Date,
            required: true,
        },
    },
    {collection: "Search"},
);

export default mongoose.model("Search", schema);
