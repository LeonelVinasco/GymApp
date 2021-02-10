const { Router } = require('express')
const Handlers = require('./handlers/handlers');
const guard = require('express-jwt-permissions')()
const validate = require('./validation/validation');

class StarRouter {
    constructor(){
        this.StarRouter=Router()
        this.config()
    }

    config(){
        this.StarRouter.post('/api/auth/signin',validate.valRulesSignIn,Handlers.SignIn),
        this.StarRouter.post('/api/auth/signup',validate.valRulesSignUp,Handlers.SignUp),
        this.StarRouter.post('/api/list-users',validate.valRulesListUsers,guard.check('admin'),Handlers.ListUser),
        this.StarRouter.post('/api/insert-city',validate.valRulesInsertCity,guard.check('admin'),Handlers.InsertCity),
        this.StarRouter.get('/api/cities',Handlers.ListCities),
        this.StarRouter.post('/api/insert-gym',validate.valRulesInsertGym,guard.check('admin'), Handlers.InsertGym),
        this.StarRouter.get('/api/gyms',Handlers.ListGyms)
    }
}

const router = new StarRouter()

module.exports=router.StarRouter