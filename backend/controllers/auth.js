const userModel = require("../models/user")

const registerValidator = require("../validators/userValidator")

exports.register = async (req , res) =>{
const validateRigester = registerValidator(req.body)

if(!validateRigester){
    return res.status(422).json(validateRigester)
}

const {usename , name , email , password , phone } = req.body

const userExists = await userModel.findOne({
    $or:[{usename},{email},{phone}]
})

if(userExists){
    res.status(422).json({
        mass : "user hast"
    })
}

}


exports.login = async (req , res) =>{


}

exports.getMe = async (req , res) =>{


}