const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response')

router.get('/',(req,res)=>{
    controller.getUser(req.query)
        .then( users =>{
            response.success(req,res,users.length,users,200)
        } )
        .catch( e=>{
            response.error(req,res,"Unexpected Error",500,e)
        })
})

router.post('/',(req,res)=>{
    const {name, email, cellphone, level, schedule, password } = req.body
    controller.addUser(name,email,cellphone,level,schedule,password)
        .then( newUser=>{
            response.success(req,res,"Usuario añadido correctamente",newUser,201 )
        } )
        .catch( e=>{
            response.error(req,res,"Información inválida",400,e)
        })
})

router.put('/:id',(req,res)=>{
    controller.updateUser(req.params.id,req.body)
        .then(updatedUser=>{
            response.success(req,res,"Información de usuario actualizado correctamente",updatedUser,200)
        })
        .catch(e=>{
            response.error(req,res,"Error interno",500,e)
        })
})

router.delete('/:id',(req,res)=>{
    controller.deleteUser(req.params.id)
        .then( deletedUser=>{
            res.send(deletedUser)
        } )
        .catch()
})

module.exports = router;