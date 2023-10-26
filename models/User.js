import mongoose from 'mongoose';
import { string } from 'yup';

const UserSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String                                        
        },
        address:{
            type:String,
        },
        job:{
            type:String,
        },
        bio:{
            type:String,
        },
        password:{
            type:String,
            required:true
        },
        confirmPassword:{
            type:String,
            required:true
        }
    },{timestamps:true}

);

export default mongoose.models.User || mongoose.model("User",UserSchema);