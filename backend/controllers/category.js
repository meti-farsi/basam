const userModel = require("./../models/user");
const categoryModel = require('./../models/category')
const { isValidObjectId } = require("mongoose");
const categoryValidator = require('../validators/categoryValidator')


exports.create = async (req , res) =>{
    const validatorcategory = await categoryValidator(req.body)

    if(!validatorcategory){
        return res.status(422).json({
            mess : 'body is not valid'
        })
    }

    const {title , href} = req.body
    const category = await categoryModel.create({
        title,
        href
    })

    res.status(201).json(category)
}

exports.getAll = async (req , res) =>{
    const categories = await categoryModel.find({}).lean()
    res.status(200).json(categories)
}

exports.remove = async (req , res) =>{
     const {id} = req.params

    if(!isValidObjectId(id)){
        return res.status(422).json({
            mess : 'id is not valid'
        })
    }

    const category = await categoryModel.findOneAndDelete({_id : id})

    if(!category){
        return res.status(404).json({
            mess : 'category not found'
        })
    }

    res.status(200).json({
        mess : 'delete category successfully'
    })
}
exports.update = async(req , res)=>{
    
    const {id} = req.params
    if(!isValidObjectId(id)){
        return res.status(422).json({
            mess : 'id is not valid'
        })
    }

    const validatorcategory =await categoryValidator(req.body)

    if(!validatorcategory){
       return res.status(422).json({
            mess : 'body is not valid'
        })
    }
    const {title , href} = req.body
    const newCategory = await categoryModel.findOneAndUpdate({_id :id},{
        title,
        href
    })
    if(!newCategory){
        return res.status(422).json({
            mess : "user is not found"
        })
    }

    res.status(201).json({
        mess : 'category update successfuly'
    })
}