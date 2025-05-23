const UserService = require('../services/user-service')

const userService = new UserService()

const create = async(req, res)=> {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            data: response,
            message: "Successfully created a user",
            success: true,
            err: {}

        })
        
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data: {},
            message: error.message,
            success: false,
            err: error.explanation
        })    
    }
}

const signIn = async(req, res)=> {
    try {
        const response = await userService.signIn(req.body.email, req.body.password)
        return res.status(200).json({
            data: response,
            message: "Successfully signin",
            success: true,
            err: {}

        })
        
        
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            data: {},
            message: error.message,
            success: false,
            err: error.explanation
        })   
    }
}

const isAuthenticated = async(req, res)=>{
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token)
        return res.status(200).json({
            data: response,
            success: true,
            message: 'user is authenticated and token is valid',
            err: {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        })     
    }
}

const isAdmin = async(req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched wheather user is admin or not',
            err: {} 
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        }) 
        
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin 
}
