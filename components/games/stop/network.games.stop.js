const express   = require('express');
const router    = express.Router();
const controller= require('./controller.games.stop');
const response  = require('../../../network/response');
const { validateJWT } = require('../../../middlewares/validateJWT');

router.get('/',validateJWT([]),(req,res)=>{
    controller.getRound()
        .then(round=>{
            response.success(req,res,"Petición Correcta",round,200)
        })
        .catch(e=>{
            response.error(req,res,'Unexpected Error',500,e)
        })
})
router.post('/',validateJWT(['admin','teacher']),(req,res)=>{
    const {letter,numberOfWinners} = req.body;
    controller.addRound(letter,numberOfWinners)
        .then(newRound=>{
            response.success(req,res,'Ronda añadida correctamente',newRound,200)
        })
        .catch(e=>{
            response.error(req,res,'Unexpected Error',500,e)
        })
})
router.put('/:id',validateJWT([]),(req,res)=>{
    controller.updateRound(req.params.id,req.body,req.user)
        .then(updatedRound=>{
            let message
            updatedRound === -1 ? message="Lo siento ya tenemos a los ganadores" : message="Muy bien, tus respuestas fueron registradas"
            response.success(req,res,message,updatedRound,200)
        })
        .catch(e=>{
            response.error(req,res,"Error",500,e)
        })
})
router.delete('/:id',validateJWT(['admin']),(req,res)=>{
    controller.deleteRound(req.params.id)
        .then(deletedRound=>{
            response.success(req,res,"Round eliminado",deletedRound,200)
        })
        .catch(e=>{
            response.error(req,res,"Error interno",500,e)
        })
})
module.exports = router;