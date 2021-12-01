import express from "express";


// import dotenv package 
import dotenv from 'dotenv';


//configure dotenv
dotenv.config();

// import mongoose
import mongoose from "mongoose";


// create an instance of express server 
const app = express();



// create a variable for our PORT number 
const PORT = 5000;


// create a routes to make request to the server 
app.get('/', (req, res)=>{
     res.send ('Hello World');
    
});

mongoose.connect(process.env.MONGO_DB_CONSTRING, (error)=>{

if (error){
    return console.log ("Couldnt connect to MongoDB");
}

else {
    return console.log("Connection to MongoDB was successful");
}


});





// start the server to listen to incoming request 
// on the specifield PORT 

app.listen(PORT, () => console.log(`Server is up and running on: ${PORT}`));
