const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/',(req,res)=>{
    controller.getUser()
        .then( users =>{
            res.send(users)
        } )
        .catch()
})

router.post('/',(req,res)=>{
    const {name, email, cellphone, level, schedule } = req.body
    controller.addUser(name,email,cellphone,level,schedule)
        .then( user=>{
            res.send(user)
        } )
        .catch()
})

router.put('/',(req,res)=>{
    controller.updateUser()
        .then(user=>{
            res.send(user)
        })
        .catch()
})

router.delete('/',(req,res)=>{
    controller.deleteUser()
        .then( user=>{
            res.send(user)
        } )
        .catch()
})

module.exports = router;