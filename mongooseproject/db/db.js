import mongoose from "mongoose";

// const connectdb = ()=>{
//     mongoose.connect(process.env.MONGO_URI)
//    .then(()=> console.log("MongoDB Connected..."))
//    .catch(error => console.log("error",error))
// }

const connectdb =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName:"mongoose"
        })
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log(error);
    }
}

export default connectdb;