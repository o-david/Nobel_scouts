import dotenv from 'dotenv'
import connectDB from './db/db.js'
import express from 'express'
import User from './models/userModel.js'
const app = express()
dotenv.config()
connectDB()

app.get('/add/:name/:age', async(req, res)=>{
    const {name, age } = req.params
    const result = await User.create({name:name, age:age})
    console.log(result);
    res.send(result)
})

app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})