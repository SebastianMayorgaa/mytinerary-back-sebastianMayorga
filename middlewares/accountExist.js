import User from "../models/User.js";

export default async (req,res,netx) => {
    try {
        let mail = req.body.email
        let account = await User.findOne({email: mail})
        if (account) {
            return res.status(400).json({
                succes: false,
                message: "User already exists"
            })
        }
        netx()
    } catch (error) {
        netx(error)
    }
}