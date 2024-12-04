const dotenv =require('dotenv');
dotenv.config();

// here we are exporting all the env variables that the project uses
module.exports={
    port: process.env.port,
    dv_url: process.env.dv_url
}