const app = require("./app") 
require('dotenv').config();
const mongoose = require("mongoose") 


const port = process.env.PORT ;

(async => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected");
    
})();

app.listen(port, ()=>{
    console.log("connected")
})