
import mongoose from "mongoose";

export const Connection=async(URL)=>{

    try {
        await mongoose.connect(URL, {useUnifiedTopology:true,useNewUrlParser:true})
        console.log("your database is connected successfully")

    }catch(error){
        console.log("error while connecting to DataBase",error.msg);
    }
}

export default Connection;