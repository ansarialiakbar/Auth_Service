const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Somethinf went wrong',
            err: 'Email or Password missing in the request'
        })
    }
    next()
}

module.exports = {
    validateUserAuth
}