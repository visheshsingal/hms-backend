import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin = async (req,res,next) => {
    try {
        
        const {atoken} = req.headers
        if(!atoken){
            return res.json({success:false, message:"Not Authorized Login Again"})
        }
        // decode this token
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

        // check if it is same as email id and password
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:'Not Authorized Login Again'})
        }
        
        next()

    } catch (error) {
        console.log(error)
        res.json({success: true, message: error.message})
    }
}

export default authAdmin