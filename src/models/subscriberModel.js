import { Schema, model } from "mongoose";

const subscriberSchema = new Schema({
  name: String,
  email: { type: String, unique: true, lowercase: true },
  zipcode: {
    type: Number,
    min: [1000, "Code Postal est trop court"],
    max: 99999,
    },
  books : [{type : Schema.Types.ObjectId, ref: "Book"}],
},
{
    timestamps: true,
}
);

const Subscriber = model("Subscriber", subscriberSchema);

export default Subscriber;
