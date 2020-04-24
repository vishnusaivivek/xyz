const mongoose=require('mongoose');
const reviewSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    shopname:{
        type: String,
        required:true
        
    },
    rating:{
        type: Number,
        required:true
        
    },
    review:String
})
module.exports=mongoose.model('Review',reviewSchema);