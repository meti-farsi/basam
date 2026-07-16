
const menuModel = require('../models/menu');

exports.getAll = async (req, res) => {

    const menu = await menuModel.find().lean()

    const parents = menu.filter(item => !item.parent)
    const children = menu.filter(item => item.parent)

        const menuTree = parents.map(parent => {
        const submenu = children.filter(child => String(child.parent) === String(parent._id)
        );

        return submenu.length ? { ...parent, submenu } : parent;
    });

res.status(200).json(menuTree)
}

exports.create = async (req, res) => {
 
    const { title, href, parent } = req.body;

    const menue =await menuModel.create({
        title,
        href,
        parent
    })
    if(!menue) {
        return res.status(400).json({
            message: "menu not created"
        })
    }
    res.status(201).json({
        message: "menu created successfully",
        data: menue
    })
}

exports.getAllPanel =async (req, res) => {
    const menu = await menuModel.find().populate("parent").lean()

    if(!menu) {
        return res.status(404).json({
            message: "menu not found"
        })
    }
    res.status(200).json(menu)
}
exports.getOne = async(req, res) => {
     const {id} = req.params

    const menu = await menuModel.findById(id)
    
    console.log(menu)
    if(!menu) {
        return res.status(404).json({
            message: "menu not found"
        })
    }
    res.status(200).json({
        menu
    })
}

exports.update = async(req, res) => {

    const {id} = req.params
    const { title, href, parent } = req.body;

    const menu = await menuModel.findOneAndUpdate({_id : id}, {
        title,
        href,
        parent
    })

    if(!menu) {
        return res.status(404).json({
            message: "menu not found"
        })
    }
    res.status(200).json({
        message: "menu updated successfully",
        data: menu
    })
}

exports.delete = async(req, res) => {
    const {id} = req.params

    const menu = await menuModel.findByIdAndDelete(id)
    
    if(!menu) {
        return res.status(404).json({
            message: "menu not found"
        })
    }
    res.status(200).json({
        menu
    })

}



