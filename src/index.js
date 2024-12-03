const express = require('express');// require a servor

const servorConfig =require('./config/serverConfig')

// making object of express
const App = express();

 


App.listen(servorConfig.port,()=>{
    console.log(`Servor Started at port ${servorConfig.port}`);
   
})









