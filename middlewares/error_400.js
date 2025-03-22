const error_400 = (error, req, res, next) => {
    if (error.name === "ValidationError" || error.status === 400) {
        return res.status(400).json({
            success: false,
            message: error.message || "Validatiion Error",
            errors: error.errors || null
        });
    }

    next(error);
};

export default error_400;