const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')
const apiRoiutes = require('./routes/index')

const app = express()

const prepareAndStartServer = () => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/api', apiRoiutes)

    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);
        
    })

}

prepareAndStartServer()