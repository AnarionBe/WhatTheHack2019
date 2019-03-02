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
    },
    {collection: "Activity"},
);

export default mongoose.model("Activity", schema);
/* title - description - locality - validity */
