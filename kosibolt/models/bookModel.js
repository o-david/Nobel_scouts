import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    author:{
        type:String,
        required:true
    },
    publishedYear:{
        type:Number,
        required:true
    }
})

const Book = mongoose.model('book', bookSchema)
export default Book