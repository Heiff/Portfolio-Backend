const nodemailer = require('nodemailer');



  const GetTouch = async(req,res) => {
    try {
        const { email,name,comment } = req.body;

        const transporter = nodemailer.createTransport({
            port: 465, 
            host: "smtp.gmail.com",
            auth: {
              user: "bohoikromov403@gmail.com",
              pass: "twffvlecflywvvup",
            },
            secure: true,
          });
        

        const mailData = {
            from: email, 
            to: "boho6565boho@gmail.com", 
            subject: "Sending Email using Portfolio site",
            text: name,
            html: `${name} ${email} ${comment}`,
          };
          await transporter.sendMail(mailData);
          res.status(200).json({message:"succes"})
    } catch (error) {
        res.status(500).json(error.message)
    }
  }


  module.exports = GetTouch;