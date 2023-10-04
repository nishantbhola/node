const mongoose = require('mongoose');
const tourController = require('././models/tourModel')

const database=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/newsagar')
    .then(()=>console.log("connection successful"))
    .catch((err)=>console.log("error-->>>>",err))

}
database()
module.exports.database




// now we connect it with our MVC structure 