const User=require("../model/userModel");
const bcrypt=require("bcrypt");

const register = async (req, res,next) => {
  try {
    const {username,userEmail,password}=req.body;
    const usernameCheck=await User.findOne({username});
    if(usernameCheck){
      return res.json({status:false,msg:"User Name already exist"})
    }
    const userEmailCheck=await User.findOne({userEmail});
    if(userEmailCheck){
      return res.json({status:false,msg:"User email already exist"})
    }
    const hashPass=await bcrypt.hash(password,10);
    const user =await User.create({
      userEmail,
      username,
      password:hashPass,
    })
    delete user.password;
    return res.json({status:true,user});
    
    } catch (error) {
      next(error)
    }
  
};

const login = async (req, res,next) => {
  try {
    const {username,password}=req.body;
    const user=await User.findOne({username});
    
    if(!user){
      return res.json({status:false,msg:"User Name not exist"})
    }

    const userPasswordCheck=await bcrypt.compare(password,user.password);

    if(!userPasswordCheck){
      return res.json({status:false,msg:"Incorrect Password"})
    }
    
    delete user.password;
    return res.json({status:true,user});
    
    } catch (error) {
      next(error)
    }
  
};

module.exports = {
  register,
  login
};
