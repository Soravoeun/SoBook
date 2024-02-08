import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    first: {
      type: String,
      trim: true, //remove space before and after in a typing
    },
    last: {
      type: String,
      true: true,
    },
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    défault: false,
  },
});

export const User = mongoose.model("User", userSchema);
