const userModel = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function signup(req,res){
    try{
        const {userName,email,password,contactNo} = req.body;
        const normalizedEmail = String(email || "").trim().toLowerCase();
        const escapedEmail = normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const emailMatcher = new RegExp(`^${escapedEmail}$`, "i");

        if (!normalizedEmail) {
            return res.status(400).json({ message: "Email is required" });
        }

        const isuserAlreadyExists = await userModel.findOne({ email: emailMatcher });
                if (isuserAlreadyExists) {
                    return res.status(400).json({ message: "User already exist" });
                }

                const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const createdUser = await userModel.create({
            userName,
            email: normalizedEmail,
            password: hashedPassword,
            contactNo,
        });

         const token = jwt.sign({ email: normalizedEmail }, process.env.JWT_SECRET);
        
                res.cookie("usertoken", token, { httpOnly: true, sameSite: 'lax' });
                return res.status(201).json({
                    message: "user registred successfully",
                    user: {
                        userId: createdUser._id,
                        email: createdUser.email,
                        userName: createdUser.userName,
                        contactNo: createdUser.contactNo
                    }
                    
                });
                console.log("user created successfully", createdUser._id);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

async function login(req,res) {
    const {email,password} = req.body;
    const normalizedEmail = String(email || "").trim().toLowerCase();
    const escapedEmail = normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const emailMatcher = new RegExp(`^${escapedEmail}$`, "i");

    if (!normalizedEmail || !password) {
        return res.status(400).json({
            message: "invalid email or password"
        })
    }

    const checkUserexist = await userModel.findOne({
    email: emailMatcher
})

if(!checkUserexist){
    return res.status(400).json({
        message: "invalid email or password"
    })
} 

const isPasswordValid = await bcrypt.compare(password, checkUserexist.password);
 
if(!isPasswordValid){
    return res.status(400).json({
        message: "invalid email or password"
    })
}

const token = jwt.sign({ userId: checkUserexist._id }, process.env.JWT_SECRET);

res.cookie("usertoken", token, { httpOnly: true, sameSite: 'lax' });

res.status(200).json({
    message: "user logged-in succssefully",
    user: {
        userId: checkUserexist._id,
        email: checkUserexist.email,
        userName: checkUserexist.userName,
        contactNo: checkUserexist.contactNo
    }
})
  
}

async function isLoggedIn(req, res) {
    const token = req.cookies.usertoken;
    if (!token) {
        return res.status(200).json({ loggedIn: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ userId: decoded._id }).select("email userName contactNo _id");
        if (!user) {
            return res.status(200).json({ loggedIn: false });
        }
        return res.status(200).json({ loggedIn: true, user });
    } catch (error) {
        return res.status(200).json({ loggedIn: false });
    }   
}

function logoutUSer(req,res){
    res.clearCookie("usertoken");
    res.status(200).json({
        message: "logged out successfully"
    })
}

module.exports = {
    signup,
    login,
    isLoggedIn,
    logoutUSer
}