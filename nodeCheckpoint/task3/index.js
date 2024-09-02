const fs = require("fs")

fs.writeFile('../welcome.txt','Hello Node', (err)=>{
    if (err) {
        console.log("there was an error adding file:", err);
        return
    }
})

fs.readFile('keep/welcome.txt' ,(err, data)=>{
    if (err) {
        console.log("there was an error reading file:", err);
        return
    }
        console.log(data.toString())
})


console.log("i am done")