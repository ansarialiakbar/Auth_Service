const express = require('express')
const bodyParser = require('body-parser')


const {PORT} = require('./config/serverConfig')
const apiRoiutes = require('./routes/index')

// const UserService = require('./services/user-service')

const app = express()

const prepareAndStartServer = () => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/api', apiRoiutes)

    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);

        // const service = new UserService()
        // const newToken = service.createToken({
        //     email: 'akbar@admin.com',
        //     id: 1
        // })
        // console.log('new Token is', newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrYmFyQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3NDY1OTc4MTUsImV4cCI6MTc0NjYwMTQxNX0.lCKt8ypy7tQZmEk2mPExWFRC5UDR1ak4A6D-7DUAcYw'
        // const response = service.verifyToken(token)
        // console.log(response);
        
        
        
    })

}

prepareAndStartServer()