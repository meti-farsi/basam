const app = require("./app") 
require('dotenv').config();
const mongoose = require("mongoose") 


const port = process.env.PORT ;
console.log(port);

(async () => {
  let test =  await mongoose.connect(process.env.MONGO_URI)
    console.log(`connected db ${test}`)
    
})();

app.listen(port, ()=>{
    console.log("started backend ")
})