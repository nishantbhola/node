
const express = require("express");
// const fs = require("fs");
const tourRouter = require('./routes/tourRoutes')
// const mongoose = require('mongoose')
// const {database}  = require('./server')
// const userRouter = require('./routes/userRoutes')
const database = require('./server')

// mongoose.connect('mongodb://127.0.0.1:27017/newsagar')
// .then(()=>console.log("connection successful"))
// .catch((err)=>console.log("error-->>>>",err))


const app = express();
// database();



let PORT = 3000;

app.use(express.json());

app.use('/api/v1/tours' ,tourRouter)
// app.use('/api/v1/users',userRouter)


app.listen(PORT , (req , res)=>{
console.log(`port is listening ${PORT}`)
})