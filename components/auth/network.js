const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.post('/',(req,res)=>{
    const {email,password} = req.body;
    controller.login(email,password)
        .then((message)=>{
            response.success(req,res,'Loggeado correctamente',message,200)
        })
        .catch(e=>{
            response.error(req,res,e,400,e)
        })
})

module.exports = router;