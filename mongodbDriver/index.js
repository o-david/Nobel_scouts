const { MongoClient } = require('mongodb')

const uri = "mongodb+srv://okekedavid1333:nobelscouts@cluster0.o6u8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri)

const connectdb = async()=>{
    try {
        await client.connect()
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("the error is :",error); 
    }
}
const userCol = client.db("nob").collection("user")
connectdb()


app.post("", async()=>{
    
    const work =await userCol.insertOne({name:"jones", school:"GMC"})

})
// const main=async()=>{
//     try {
//         await connectdb()
//         console.log(work);
        
//     } catch (error) {
//         console.log(error);
//     }
//     finally {
//         await client.close()
//     }
// }
// main()