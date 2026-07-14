const Newsletter = require("./../models/newsletters");


exports.create  = async(req,res)=>{
    const {email} = req.body;
    const newsletter = await Newsletter.create({email});

    if(!newsletter){
        return res.status(400).json({message: "Newsletter not created"});
    }

    res.status(201).json({message: "Newsletter created", newsletter});

}

exports.getAll = async(req,res)=>{
    const newsletters = await Newsletter.find();
    res.status(200).json({message: "Newsletters retrieved", newsletters});
}

