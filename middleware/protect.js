const User=require('../models/user')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv').config()

const protect=async(req,res,next)=>{
    let token
   console.log(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    if(req.headers.authorization){
      const token=req.headers.authorization.split(' ')[1]
      const decode=jwt.verify(token,process.env.SECRET)
      console.log(decode)

     req.user=await User.findById(decode.id).select(-password)
    }
    else{
        console.log('not valid')
    }
    next()
}

module.exports=protect