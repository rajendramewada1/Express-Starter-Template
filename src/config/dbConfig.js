const mongoose = require('mongoose');
const serverConfig =require('./serverConfig');// require servore config folder
// 
// the below function help us to connect to a mongo db servor
async function connectDB() {

    try {
         await mongoose.connect(serverConfig.dv_url)
         console.log("succesfuuly connected to the mongo db servor")

    } catch(error){
        console.log("not able to connect to the mongo servor")
        console.log(error);
    

    
}
}
 module.exports =connectDB //  function