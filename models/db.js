const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://Jasjot:Bullet@cluster0.2zgy9.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('connected',()=>{
    console.log('Connected to the database')
})