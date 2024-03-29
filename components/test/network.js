const express           = require('express');
const { validateJWT }   = require('../../middlewares/validateJWT');
const router            = express.Router();
const controller        = require('./controller')
const response          = require('../../network/response')

router.post('/',validateJWT(['teacher','admin']),(req,res)=>{
    const {name,number,description,level,questions,type,auxiliar,schedule} = req.body
    const teacher = req.user.name
    controller.addTest(name,number,description,level,teacher,questions,type,auxiliar,schedule)
        .then( addedTest => {
            response.success(req,res,"Test añadido correctamente",addedTest,201)
        } )
        .catch( e=>{
            response.error(req,res,"Información inválida. "+e,400,e)
        } )
})

router.get('/',validateJWT(['everybody']),(req,res)=>{
    const requestingUser = req.user;
    let requestingUserInfo = null;
    if(requestingUser) {requestingUserInfo=requestingUser}
    controller.getTest(requestingUserInfo)
        .then(tests=>{
            response.success(req,res,tests.length,tests,200)
        })
        .catch(e=>{
            response.error(req,res,"Something went wrong",400,e)
        })    
})

module.exports = router;