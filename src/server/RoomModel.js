import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        users: [
            {
                type: String,
                required: true,
            },
        ],
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
    {collection: "Room"},
);

export default mongoose.model("Room", schema);
