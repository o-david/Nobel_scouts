import express from "express";
import dotenv from "dotenv"
import examRoutes from "./routes/examROutes.js"
import attendanceRoutes from "./routes/attendanceRoutes.js"

dotenv.config()
const app = express()

app.set('view engine', 'pug');
app.set('views','./views');

const myLogger = function (req, res, next) {
    console.log("A new request received at " + Date.now());
     next();
  }
  app.get('/', (req,res)=>{
      res.send("Hello World") 
    })
    
  app.get('/pug', (req,res)=>{

      res.render("home", {
        title: "Welcome to our School",
        message: "This is a test message from Pug",
      }) 
    })
    
    app.use("/exam", myLogger)

app.use("/exam", examRoutes)
app.use("/attendance", attendanceRoutes)



app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port http://localhost:3000")
})















// const isAdmin = (req, res, next)=>{
//     console.log(req.params.admin);
    
//     return req.params.admin == "true"?next():res.status(401).send("Unauthorized")
// }
// const school= (req,res)=>{
//     res.send("dklsdfnasfa")
// }

// app.get('/school', school)

// app.get('/allusers/:admin', isAdmin, (req,res)=>{
//     res.send("all users")
// })


// app.get('/user', school)
// app.delete('/user', school)

// app.route('/user')
// .get(school)
// .post()







// app.get('/p?guy/:id/:reg', (req,res)=>{
//     res.set('Content-type', 'text/html');
//     res.send(`<html>
//         <body>
//         <h1>welcome ${req.params.reg}</h1>
//         </body>
//         </html>`) 
// })
// app.get('/', (req,res)=>{

//     res.send("Hello World") 
// })

// // app.get('*', (req,res)=>{
// //     res.send("Default guy") 
// // })
