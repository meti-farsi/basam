const app = require("./app") 
require('dotenv').config();
const mongoose = require("mongoose") 


const port = process.env.PORT ;
console.log(port);

(async () => {
    try {
      console.log("Connecting...");
  
      await mongoose.connect(process.env.MONGO_URI);
  
      console.log("Connected");
  
      app.listen(port, () => {
        console.log(`Server started on ${port}`);
      });
    } catch (err) {
      console.error("Mongo Error:", err);
    }
  })();

