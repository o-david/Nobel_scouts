import express from "express"
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("Hello exam") 
})
router.get('/bye', (req,res)=>{
    res.send("Bye exam") 
})

export default router