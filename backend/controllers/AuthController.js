const User = require("../model/UserModel");
const { createSecretToken } = require("./SecretToken.js");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
     const salt = await bcrypt.genSalt(12);           // 12 rounds of salt
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const user = await User.create({ email, password : hashedPassword, username, createdAt });
    const token = createSecretToken(user._id);

    console.log(user);
    res.cookie("token", token, {
      withCredentials: true,  //cookies send karna allow hai frontend se backend me 
      httpOnly: true,
      sameSite: "lax",
      secure: false,    // ✅ true when deployed on HTTPS(false->localHost)
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });


      
    next();
  } catch (error) {
    res.send(error);
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
  
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);                                     //Ye token ek signed proof hota hai ki user authenticated hai. ye user._id use karke banta hai
     res.cookie("token", token, {
       withCredentials: true,                //Ab jab bhi browser next request bhejega (e.g., /dashboard, /profile),
                                         //to wo ye cookie automatically saath me bhej dega(Auto authentication)
       httpOnly: true,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error); 
  }
}