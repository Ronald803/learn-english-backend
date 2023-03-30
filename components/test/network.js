const express           = require('express');
const { validateJWT }   = require('../../middlewares/validateJWT');
const router            = express.Router();
const controller        = require('./controller')
const response          = require('../../network/response')

router.post('/',validateJWT('teacher'),(req,res)=>{
    const {name,number,description,level,questions} = req.body
    const teacher = req.user.name
    controller.addTest(name,number,description,level,teacher,questions)
        .then( addedTest => {
            response.success(req,res,"Test añadido correctamente",addedTest,201)
        } )
        .catch( e=>{
            response.error(req,res,"Información inválida. "+e,400,e)
        } )
})

router.get('/',(req,res)=>{
    controller.getTest()
        .then(tests=>{
            response.success(req,res,tests.length,tests,200)
        })
        .catch(e=>{
            response.error(req,res,"Something went wrong",400,e)
        })    
})

module.exports = router;