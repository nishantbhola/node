const express = require('express');
const getAllUsers =()=>{
    res.status(500).json({
      status : 'error',
      message:"this rote is not defined"
    })
  }
  const createUser =()=>{
    res.status(500).json({
      status : 'error',
      message:"this rote is not defined"
    })
  }
  const getUser =()=>{
    res.status(500).json({
      status : 'error',
      message:"this rote is not defined"
    })
  }
  const updateUser =()=>{
    res.status(500).json({
      status : 'error',
      message:"this rote is not defined"
    })
  }
  const deleteUser =()=>{
    res.status(500).json({
      status : 'error',
      message:"this rote is not defined"
    })
  }
const router = express.Router();    

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)
module.exports=router;