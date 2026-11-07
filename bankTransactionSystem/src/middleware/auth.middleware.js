const userModel=require('../models/user.model')
const jwt=require('jsonwebtoken')

async function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    const token= req.cookies.token || (authHeader.startsWith("Bearer ") ? split(" ")[1] : null );
    if (!token){
        return res.status(401).json({
            message:"Unauthorized access, token is missing"
        })
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user = userModel.findById(decoded.userId)
        req.user=user
        return next()
    } catch (error) {
        return res.status(401).json({
            message:"Unauthorized, access, token is unvalid"
        })
    }

}

module.exports={
    authMiddleware
}