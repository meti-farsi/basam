module.exports = async (req , res , next)=>{

    let isAdmin = req.user.role ==="ADMIN"

    if(isAdmin){
        return next()
    }

    return res.status(403).json({
        massage :"you are not admin "
    })
}