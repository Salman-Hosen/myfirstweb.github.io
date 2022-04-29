const dataModel = require('../db/mernDb')
const jwt = require('jsonwebtoken');
require('dotenv').config();



const auth1 = async (req,res,next)=>{
    try {
        const token =  req.cookies.salman;
    const verifyToken =  jwt.verify(token, process.env.TOKEN)
    const huser = await dataModel.findOne({_id:verifyToken._id})
    
    req.huser =huser
    next();
        
    } catch (error) {
      res.status(402).send("Error")
        
    }
    
}

module.exports = auth1;