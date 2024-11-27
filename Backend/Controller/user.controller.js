import User from "../Model/user.model.js"
import bcrypt from "bcrypt";

export const signup= async(req,res) =>{
    try {
      const {name,email,password} = req.body;
      const user = await User.findOne({email});
      if(user){
        return res.status(400).json({message:"User Already exists"})
      }

      bcrypt.genSalt(10,  function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            // Store hash in your password DB.
           
            

      const createdUser = new User({
        name,
        email,
        password:hash
      });
      await createdUser.save()
      res.status(201).json({message:"User Created Sucessfully"})
    });
      })
    
    

    } catch (error) {
       console.error("Error :" +error.message);
       res.status(500).json({message: "Internal server error"});
       
    }
}


export const login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
        return res.status(400).json({message:"Email or password incorrect"})
           
        }
        bcrypt.compare(password, user.password, function(err, result) {
          if(result){
           res.status(201).json({message:"Welcome",user:{
              _id:user._id,
              name:user.name,
              email:user.email
           }})

          }
          else{
           return res.status(400).json({message:"Email or password incorrect"})

          }

        });
    } catch (error) {
      console.error("Error :" +error.message);
      res.status(500).json({message: "Internal server error"});
    }
}