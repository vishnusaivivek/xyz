const express=require('express');
const router=express.Router();
const Review=require('../models/reviewschema')
const mongoose=require('mongoose')
router.post('/',(req,res,next)=>{

    const review=new Review({
         _id:new mongoose.Types.ObjectId(),
         shopname:req.body.shopname,
         rating:req.body.rating,
         review:req.body.review,
    });
    review
    .save()
    .then(result=>{
             console.log(result);
             res.status(201).json({
                message: "Created shop successfully",
                createdUser: {
                    shopname:result.shopname,
                    review:result.review,
                    rating:result.rating,                   
                    _id: result._id,
                    
                }
              });
              
    })
    .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
     });
router.get("/byid/:reviewId", (req, res, next) => {
    const id = req.params.reviewId;
     Review.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
            res.status(200).json({
                user: doc,
                
              });
            } else {
              res
                .status(404)
                .json({ message: "No valid entry found for provided ID" });
            }
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
          });
      });
      router.get("/getreviews", (req, res, next) => {
       
         Review.find()
          .exec()
          .then(doc => {
            console.log("From database", doc);
            res.json(doc);
          });
        });
                     
module.exports = router;