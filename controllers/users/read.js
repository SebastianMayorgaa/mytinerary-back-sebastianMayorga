const validateToken = async (req,res,next) => {
    try {
        return res.status(200).json({
            success: true,
            response: {
                email: req.user.email
            }
        })
    } catch (error) {
        next(error)
    }
}

export default validateToken