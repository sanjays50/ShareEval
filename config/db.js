const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();

// function connectDB(){
//     mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});

//     const connection=mongoose.connection;

//     connection.once('open',()=>{
//         console.log('database connected.');
//     }).catch((err)=>{
//         console.log('connection failed.');
//     })
// }

const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}

module.exports=connectDB;