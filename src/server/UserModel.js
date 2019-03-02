import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
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
        username: {
            type: String,
            required: true,
        },
        languages: [
            {
                type: String,
            },
        ],
    },
    {collection: "User"},
);

export default mongoose.model("User", schema);
