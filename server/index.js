//we need to install express
//npm add express
//npm add nodemon
//to run our server
// "dev" : "nodemon index.js" 
//in package.json>script>dev
//npm add cors ()
//npm install mongoose
//so basicaally all this stuff is middleware because we need to store in json way in our server then after that we need to connec t mongo db database

const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
const app = express();
const User = require('./models/user.model');

app.use(cors());
app.use(express.json()); // Corrected usage
mongoose.connect('mongodb://localhost:27017/chat-app',{useNewUrlParser: true, useUnifiedTopology: true })

app.post('/api/register', async(req, res) => {
    try{
   const user=await User.create({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password
   })
   res.json({status : "ok"})
    }
    catch(err){
        res.json({ status: "error",error : "dublicate" });
    }
 
   
});
app.post('/api/login', async(req, res) => {
   
   const user=await User.findOne({
 
    email : req.body.email,
    password : req.body.password
   })
   if(user){
   return res.json({status : "ok",user : true})
   }
   else
   {
    return res.json({status : "error",user : false})
   }
   
});

// Start the server
app.listen(1337, () => {
    console.log('Server started on port 1337');
});