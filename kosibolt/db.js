import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName:"kosibolt"
        })
        console.log('succesful');
    } catch (error) {
        console.log("failed", error);
    }
}

export default connectDB;