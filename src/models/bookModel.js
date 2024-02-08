import { Schema, model } from "mongoose";


const bookSchema = new Schema({
    title: { type: "string", required: true },
    image: { type: "string", required: true },
    description: { type: "string", required: true },
    auteur: { type: "string", required: true },
    synopsis: { type: "string", required: true },
})

export const Book = model("Book", bookSchema);