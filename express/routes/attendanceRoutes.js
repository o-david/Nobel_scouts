import express from "express"
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("Hello attendance") 
})
router.get('/bye', (req,res)=>{
    res.send("Bye Attendance") 
})

export default router