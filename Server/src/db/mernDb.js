
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const dataSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:{
        type:String,
        required:true
    },tokens:[{
        token:{
            type:String,
            required:true  
        }
    }]
})
dataSchema.methods.createToken = async function(){
    try {
        const token = await jwt.sign({_id: this._id.toString()}, process.env.TOKEN)
        this.tokens =  this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    } 
}

const dataModel = new mongoose.model('dataModel',dataSchema);

module.exports = dataModel;