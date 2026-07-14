const contactModel = require("../models/contact");
const { isValidObjectId } = require("mongoose");


exports.create = async (req , res) =>{
    
let {name,email,phone,answer,body} = req.body

let newcantact = await contactModel.create({name,email,phone,answer,body,answer : 0 })

res.status(201).json(newcantact)

}

exports.getAll = async (req , res) =>{
    let allcantact = await contactModel.find({})
    res.status(201).json(allcantact)

}

exports.remove = async (req , res) =>{
    
    let removeConatct = await  contactModel.findByIdAndDelete(req.params.id)
console.log(req.params.id);

    if(!removeConatct){
     return   res.status(201).json({mess:"کامنت نیست"})
    
    }
    
    
    return res.status(201).json(removeConatct)

}
exports.answer = async (req , res) =>{


}
