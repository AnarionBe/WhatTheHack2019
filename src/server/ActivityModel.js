import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            text: true,
            required: true,
        },
        locality: {
            type: String,
            required: true,
        },
        validity: {
            type: Date,
            required: true,
        },
    },
    {collection: "Activity"},
);

export default mongoose.model("Activity", schema);
