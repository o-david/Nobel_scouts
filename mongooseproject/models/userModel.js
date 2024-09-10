import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number 
    }

})

const User = mongoose.model('User', userSchema)
export default User