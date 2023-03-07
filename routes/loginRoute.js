const express=require('express')

const router=express.Router()
const {login,register,getMe}=require('../controllers/loginController')

//This is to login the user
router.post('/login',login)

//this is to register the user
router.post('/register',register)

//this is to get the current user

router.get('/me',getMe)


module.exports=router