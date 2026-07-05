const userModel = require("../models/user")

const registerValidator = require("../validators/userValidator")

exports.register = async (req , res) =>{

    console.log(req.body);
    
    const validateRigester = registerValidator(req.body)


    console.log(validateRigester);
    

if(validateRigester !== true){
    return res.status(422).json(validateRigester)
}

let {username , name , email , password , phone } = req.body

console.log(username);


const userExists = await userModel.findOne({
    $or:[{username},{email}]
})
console.log(userExists);

if(userExists){
    res.status(422).json({
        mass : "user hast"
    })
} else{

    await userModel.create({username , name , email , password , phone })
    res.status(422).json({
        mass : "اوکیش میکنم "
    })
}

}


exports.login = async (req , res) =>{


}

exports.getMe = async (req , res) =>{


}