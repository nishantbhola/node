const mongoose=require('mongoose');
const tourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'A Tour must have a name'],
        unique:[true, 'A Tour must have a unique name']
    },
    rating:Number,
    Price:{
        type:Number,
        default:5
    }
})

const Tour = mongoose.model('Tour',tourSchema)

const testTour=new Tour({
    name:'Naveen Prakash Tiwari',
    rating:18,
    price:1000
})

testTour.save().then(doc=>{console.log("doc--->>>",doc)})
.catch(err=>{console.log("err-->>>",err)})

module.exports = Tour;