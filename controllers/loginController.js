const User=require('../models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv').config()
//@Post request 
// Route: /login
const login=async(req,res)=>{
  const {email,password}=req.body
  const user=await User.findOne({email})
  if(user){
    console.log(process.env.SECRET)
    const correct=await bcrypt.compare(password,user.password)
    console.log(correct)
    res.status(200).json({
        id:user._id,
      email:user.email,
      token:generateToken(user._id)
    

    })
  }
  else{
    res.json({message:'User not found'})
  }
}
//@Post request 
// Route: /register
// Public route
const register=async(req,res)=>{
    const {email,password}=req.body

    const user=await User.findOne({email})

    if(user){
        res.status(400)
        res.json({message:'User already exits'})
    }
    const hashPass=await bcrypt.hash(password,10)
    console.log(hashPass)
      
    const newUser=new User({
        email,
        password:hashPass
    })
   await newUser.save()




   res.json({
    id:newUser._id,
    email
   })

}

const getMe=async(req,res)=>{
    res.json({message:'this is to get current user'})
}

const generateToken=(id)=>{
    return jwt.sign({id},process.env.SECRET,{
        expiresIn:'30d'
    })
}


module.exports={
    login,
    register,
    getMe
}