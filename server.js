//import express
const express = require('express')
//import mongoose
const mongoose = require('mongoose')
//import body-parser
const bodyparser = require('body-parser')
//import user router
const UserRouter = require('./src/routes/user.routes')
//import cors
const cors = require('cors')

//import user model
const UserModal = require('./src/modals/UserModal')

//database connection
mongoose.connect('mongodb://localhost:27017/NewActivity', ()=>{
    console.log("database connected")
});

//create app
const app = express()

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/user',UserRouter)

/// =============== SERVER =============== ///
app.listen('4000',()=>{
    console.log('server is running on port 8000')
})
//main end point is "http://localhost:4000/user"