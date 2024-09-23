import mongoose from "mongoose";

const UserSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    
})

const User = mongoose.model("users", UserSchema);
export default User;
