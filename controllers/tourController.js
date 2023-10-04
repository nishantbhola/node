const Tour = require("../models/tourModel");
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      result: tours.length,
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.createTour = async (req, res) => {
  try{
    const newTour= await Tour.create(req.body)
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data:{
        tour:newTour
      }
    });
  }
  catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
  // const tour = tours.find((e) => e.id === id);
  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     tour,
  //   },
  // });
};
exports.updateTour = async  (req, res) => {
  try{
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body,{
      new:true,
      runValidators:true
    })
    res.status(200).json({
      status: "success",
      data: { 
        tour,
      },
    });
  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.deleteTour = async (req, res) => {
  try{
const tour=await Tour.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: "success",
      data: null,
    });
  }catch(err){

  }
};

// our NEXT TARGET IS CRUD OPERATIONS BASICALLY API"S CREATE, DELETE ,UPDATE , GET
