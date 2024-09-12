import connectDB from "./db.js";
import dotenv from 'dotenv'
import express from 'express'
import Book from "./models/bookModel.js";
dotenv.config()
const app = express()
connectDB()




app.get('/', (req, res) => {
    res.send("server is live")
})

app.get('/add', async(req,res)=>{
    await Book.create({
        title:"Spider man returns",
        author:"Mr David",
        publishedYear:2024
    })
    res.send('add route')
})


app.listen(5040, ()=>{
    console.log('Server is running on port 5040');
})