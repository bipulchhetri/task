import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: Number,
});
const usermodel = mongoose.model("users", userschema);
export default usermodel;


