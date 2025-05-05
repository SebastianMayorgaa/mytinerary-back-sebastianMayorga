import User from "../../models/User.js";

let deleteUser = async (req,res,next) => {
    try {
        let userInfo = req.body
        console.log(userInfo)
        let deleteUser = await User.deleteOne(
            {email : userInfo.email}
        )
        return res.status(200).json({
            response: deleteUser
        })   
    } catch (error) {
      next(error)  
    }
}

export default deleteUser