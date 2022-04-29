const express = require('express')
const app = express();
require('../src/connection/mernConnect')
const dataModel = require('../src/db/mernDb')
bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const auth = require('../src/Auth/auth')
const auth1 = require('../src/Auth/auth1')


app.post('/register',async(req,res)=>{

    
    const name = req.body.name;
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword

    if(name ==='' || email ==='' || password ==='' || cpassword ==='' ){
    return res.status(420).json({error:"User already exist"})
}

    try {
        const userExist = await dataModel.findOne({email:email})
        if(userExist){
            return res.status(421).json({error:"User already exist"})
        }
        if(password !== cpassword){
            return res.status(422).json({error:"Password dose not match"})
        }
        const  inputData  = new dataModel(
            {name:name,
            email:email,
            password:password}
        )
        const token = await inputData.createToken();
       res.cookie('salman',token);

       const saveData = await inputData.save();
       console.log(saveData)
       return res.status(200).json(saveData)
        
        
    } catch (error) {
        console.log(error)
    }

    
})

app.post('/login',async(req,res)=>{
    const email = req.body.email
    const password = req.body.password;
    try {
        const user = await dataModel.findOne({email:email})
        if(!user){
            return res.status(420).json({error:"User email does not exist"})
        }
        if(user.password === password){
            const token = await user.createToken();
             res.cookie('salman',token);
            return res.status(200).json(user)
        }else{
            return res.status(421).json({error:"Invalid login Details"})
        }
    } catch (error) {
        console.log(error)
    }

})

//About page

app.get('/about',auth,(req,res)=>{
    const auser = req.auser
    if(auser ){
        res.send(auser)
    }else{
        return res.status(402).json({error:"Please login first"})
    }   
})

// Home page

app.get('/',auth1,(req,res)=>{
    const huser = req.huser
    try {
        if(huser ){
            return res.status(200).json(huser)
        } 
    } catch (error) {
        console.log(error)
    }
     
   
})

app.get('/logout',(req,res)=>{
    res.clearCookie('salman',{path:'/'})
     res.status(200).send('user loggedout')
})

app.listen(5000,()=>{
    console.log("Your server is running at http://localhost:5000")
})