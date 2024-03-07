import { Schema, model } from "mongoose";


const bookSchema = new Schema(
    {
    title: { type: "string", required: true },
    image: { type: "string", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    synopsis: { type: "string", required: true },
    publishYear: { type: "number", required: true },
    page: { type: "number", required: true }
    },
    {
        timestamps: true,
    }
)

export const Book = model("Book", bookSchema);