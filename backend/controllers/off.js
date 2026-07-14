const offModel = require("../models/off");
const courseModel = require("../models/course");
const { isValidObjectId } = require("mongoose");


exports.create = async (req, res) => {

    let { code, max, course, percent } = req.body

    let newoff = await offModel.create({ code, max, course, percent, createor: req.user._id, uses: 0 })

    res.status(201).json(newoff)

}

exports.getAll = async (req, res) => {
    let allcantact = await contactModel.find({})
    res.status(201).json(allcantact)

}


exports.setAllcourse = async (req, res) => {

    discount = req.body


    let setall = await courseModel.updateMany({}, { discount: req.body.discount })

    res.status(201).json({ mess: "حله" })
}
exports.getOne = async (req, res) => {
    const {code} = req.params
    const {course} = req.body
   
    if(!isValidObjectId(course)){
        return  res.status(404).json({
            mess : 'coursId not valid !!'
        })
    }

    const Findoff = await offModel.findOne({code , course})
    
    if(!Findoff){
      return  res.status(404).json({
            mess : 'off not found !!'
        })
    }else if(Findoff.uses === Findoff.max){
        return res.status(404).json({
            mess : 'off is not available !!'
        })
    }else{
        await offModel.findOneAndUpdate({code , course},{
            uses : Findoff.uses + 1
        })
    }

    res.status(201).json("Off is valid")


}

exports.remove = async (req, res) => {

    let removeConatct = await contactModel.findByIdAndDelete(req.params.id)
    console.log(req.params.id);

    if (!removeConatct) {
        return res.status(201).json({ mess: "کامنت نیست" })

    }


    return res.status(201).json(removeConatct)

}