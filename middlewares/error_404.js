const error_404 = (req,res,next) => {
    return res.status(404).json({
        succes: false,
        message: `The request ${req.method} with the url ${req.url} was not found`
    })
}

export default error_404