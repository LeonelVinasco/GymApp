const {User, Gym, City}=require('../../models')
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken')

class Handler {
    async SignIn (req,res){
        try {
            let userFound=await User.findAll({
                where: { [Op.and]:[{ name:req.body.username},
                       {password: req.body.password}]}
            })
            userFound=userFound[0]
            if(userFound){
                const token = jwt.sign({"name": userFound.name,
                              "permissions": [(userFound.admin==true)?"admin":""]},
                              'sd87yziudgbvue#"$%&&$#WEd', { algorithm: 'HS256'}, 
                              {expiresIn: 60 * 2})
                return res.send({
                    token:token,
                    user: {
                        "name":userFound.name,
                        "roles":[(userFound.admin==true)?"ROLE_ADMIN":"ROLE_CLIENT"]
                    }	
                })
            }else{
                return res.status(401).send({
                    error: "Your username or password is not valid."
                });
            }

        } catch (error) {
            return res.status(500).send({
                  error: error.message || "Server error"
            });
        }
        


    }
    
    async SignUp (req,res){
        console.log(req.body)
        let quantity
        try {
            quantity= await User.count({where: {gym:req.body.gym}})
        } catch (error) {
            return res.status(500).send({
                error: error.message || "Server error"
            })
        }
        
        if(quantity<300){
            try {
                let userFound= await User.findAll({
                    where: {
                        [Op.or]:[{ name:req.body.username},{email: req.body.email}]
                    }
                })
                if (userFound[0]){
                    return res.status(409).send({
                        message: "The user is already registered."
                    })
                }
                let userToReg={
                    name: req.body.username,
                    admin: false || req.body.admin,
                    password: req.body.password,
                    email: req.body.email,
                    gym: req.body.gym
                }
                await User.create(userToReg)
                return res.status(200).send({"Message": "User created"})
                    
            } catch (error) {
                return res.status(500).send({
                    message:
                      error.message || "Server error"
                  });
            }
        }
    }

    async InsertCity (req,res){
        let CityIn={name: req.body.city}
        try {
            await City.create(CityIn)    
        } catch (error) {
            return res.status(500).send({
                message:error.message || "Server error"
              }) 
        }
        
        return res.status(200).send({"Message": "City created"})
    }
    
    async InsertGym (req,res){
        let GymIn={
            name: req.body.gym,
            city: req.body.city
        }
        try {
            await Gym.create(GymIn)
        } catch (error) {
            return res.status(500).send({
                message:error.message || "Server error"
              }) 
        }
       
        return res.status(200).send({"Message": "Gym created"})   
    }

    async ListUser (req, res){
        try {
            let users= await User.findAll({attributes: ['name', 'email'],where: {gym:req.body.id}})
            return res.status(200).send(JSON.stringify(users))
        } catch (error) {
            return res.status(500).send({
                message:error.message || "Server error"
              }) 
        } 
    }

    async ListCities(req,res){
        try {
            let cities=await City.findAll()
            return res.status(200).send(JSON.stringify(cities))
        } catch (error) {
            return res.status(500).send({
                message:error.message || "Server error"
            })
        }
    }

    async ListGyms(req, res){
        try {
            let gyms=await Gym.findAll()
            return res.status(200).send(JSON.stringify(gyms))
        } catch (error) {
            return res.status(500).send({
                message:error.message || "Server error"
            })
        }
    }
}

const Handlers = new Handler()
module.exports=Handlers