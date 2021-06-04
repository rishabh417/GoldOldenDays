const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyparser = require('body-parser');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/goldOldenDays', { useNewUrlParser: true, useUnifiedTopology: true });
const port = process.env.PORT || 80;

// Define Mongoose Schema

// const registeringSchema = new mongoose.Schema({
//   userName: String,
//   userAge: String,
//   userPhoneNumber: String,  
//   userEmail: String,
//   userPassword: String 

// });

// const loginSchema = new mongoose.Schema({  
//   userEmail: String,
//   userPassword: String  

// });

// const forumSchema = new mongoose.Schema({
//   queryArea: String  
// });


// const loginDetail = mongoose.model('loginDetail', loginSchema);
// const registeringDetail = mongoose.model('registeringDetail', registeringSchema);
// const discussionForum = mongoose.model('discussionForum', forumSchema);


// Express speific stuff
app.use('/static', express.static('static'))
app.use(express.urlencoded())


//PUG pecific stuff
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//Endpoint
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params);
})

app.get('/vision',(req,res)=>{
    const params={}
    res.status(200).render('vision.pug',params);
})

app.get('/login',(req,res)=>{
    const params={}
    res.status(200).render('login.pug',params);
})

app.get('/register',(req,res)=>{
    const params={}
    res.status(200).render('register.pug',params);
})

app.get('/discussionForm',(req,res)=>{
    const params={}
    res.status(200).render('discussionForum.pug',params);
})

app.get('/snakeGame',(req,res)=>{
    const params={}
    res.status(200).render('snakeGame.pug',params);
})

app.get('/carGame',(req,res)=>{
    const params={}
    res.status(200).render('carGame.pug',params);
})

app.post('/login',(req,res)=>{
    var myData = new loginDetail(req.body);    
    myData.save().then(()=>{
        const params={}
        res.status(200).render('home.pug',params);
        // res.send("You have successfully login")
    }).catch(()=>{
        res.status(400).send("Their is some error occurred")
    })
    // res.status(200).render('login.pug',myData);
})

app.post('/newUser',(req,res)=>{
    var myRegisteringData = new registeringDetail(req.body);    
    myRegisteringData.save().then(()=>{
        // res.send("You have successfully Registered" )
        // res.sendFile('home.pug');
        const params={}
        res.status(200).render('home.pug',params);
    }).catch(()=>{
        res.status(400).send("Their is some error occurred")
    })
    // res.status(200).render('login.pug',myData);
})

// app.post('/login', async(req,res) =>{
//     try {
//         const email = req.body.userEmail;
//         const password = req.body.userPassword;

//         const useremail = await registeringDetail.find({userEmail:email});
//         res.send(registeringDetail.find('userPassword'));
//         // if(password === registeringDetail.find(userPassword)){
//         //     res.status(201).render('home');
//         // }
       

//     } catch (error) {
//         res.status(400).send("invalid email")
//     }
// })

app.post('/discussionForum',(req,res)=>{
    var discussionData = new discussionForum(req.body);    
    discussionData.save().then(()=>{
        res.send("You have successfully login")
    }).catch(()=>{
        res.status(400).send("Their is some error occurred")
    })
    // res.status(200).render('login.pug',myData);
})



//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})
