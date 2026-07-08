const path = require("path")
const multer = require("multer")

module.exports = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null , path.join(__dirname , ".." , "public" , "courses" , "covers"))
    },

    filename : (req , file , cb)=>{
        const filName = Date.now() + String(Math.random() * 9999)
        const ex = path.extname(file.originalname)
        cb(null , filName + ex )
    }
})