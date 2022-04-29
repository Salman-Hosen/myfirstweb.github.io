const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Your database conncetion is successfull")
})
.catch((err)=>{console.log(err)})