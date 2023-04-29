const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');
const { validateJWT } = require('../../middlewares/validateJWT');

router.get('/',validateJWT(['admin','teacher']),(req,res)=>{
    let user = req.user
    console.log(user);
    let filter
    if(user.rol==="student"){
        filter = {_id:user._id}
    }
    controller.getUser(filter)
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

router.put('/:id',validateJWT(['admin']),(req,res)=>{
    controller.updateUser(req.params.id,req.body)
        .then(updatedUser=>{
            response.success(req,res,"Información de usuario actualizada correctamente",updatedUser,200)
        })
        .catch(e=>{
            response.error(req,res,"Error interno",500,e)
        })
})

router.delete('/:id',validateJWT(['admin']),(req,res)=>{
    controller.deleteUser(req.params.id)
        .then( deletedUser=>{
            response.success(req,res,"Usuario eliminado",deletedUser,200)
        } )
        .catch( e=>{
            response.error(req,res,"Error interno",500,e)
        })
})
router.patch('/:id',validateJWT(['admin','teacher']),(req,res)=>{
    const {test} = req.body
    controller.updateTestStatus(req.params.id,test)
        .then( testErased=>{
            response.success(req,res,`Test ${test} nuevamente habilitado para el estudiante`,testErased)
        })
        .catch( e=>{
            response.error(req,res,`Algo salió mal [${e}]`)
        })
})
module.exports = router;