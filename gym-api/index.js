const express = require('express')
const expressJwt= require('express-jwt')
const cors = require('cors')
const Routes= require('./src/routes')

let jwtFunc= a => {
    const secret= 'sd87yziudgbvue#"$%&&$#WEd';
    console.log(a)
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            '/api/auth/signup',
            '/api/auth/signin',
            '/api/gyms',
            '/api/cities'
        ]
    })
}

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err })
    }
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'Invalid Token' })
    }
    return res.status(500).json({ message: err.message })
}

class Server {
    constructor(){
        this.app=express()
        this.config()
        this.routes()
    }
    
    config(){
        this.app.set('port', 3001)
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(jwtFunc())
        this.app.use(errorHandler)
    }

    routes(){
        this.app.use(Routes)
    }
    
    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server listening on port: ', 3001)
        })
    }

}

const app = new Server()
app.start()


module.exports=app.app