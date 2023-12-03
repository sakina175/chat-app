const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unqiue:true,
    },
    userEmail:{
        type:String,
        required:true,
        unqiue:true,
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:20,
        unqiue:true,
    },
    isAvatarImageSet:{
        type:Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:""
    }
});

module.export=mongoose.model("Users",userSchema);