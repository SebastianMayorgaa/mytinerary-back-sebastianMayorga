const error_500 = (error,req,res,next) => {
    return res.status(500).json({
        succes: false,
        message: "error",
        response: error
    })
}

export default error_500