const express=require('express')
const cors=require('cors')
const app=express()
const loginRouter=require('./routes/loginRoute')
require('./models/db')
const protect=require('./middleware/protect')
app.use(express.json())
app.use(cors())
app.use('/',protect,loginRouter)

app.listen(5000,()=>{
    console.log('App started at 5000')
})