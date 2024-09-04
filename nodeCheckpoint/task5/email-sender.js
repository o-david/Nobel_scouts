var nodemailer = require("nodemailer");

nodemailer
  .createTransport({
    service: "gmail",
    auth: {
      user: "okekedavid1333@gmail.com",
      pass: "ksqs bzyz zfnt kpqa",
    },
  })
  .sendMail({
    from: "okekedavid1333@gmail.com",
    to: "bashzubair@gmail.com",
    subject: "Assignment for the day",
    text: "you are to complete the checkpoint for Node js, as we will continue from here in the next class",
  }, (err, data)=>{
    if(err) {
        console.log("there is an error",err)
        return
    }
    console.log(data);
  });

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
