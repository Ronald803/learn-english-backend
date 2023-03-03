const express  = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/',(req,res)=>{
    controller.getQuestion()
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});
router.post('/',(req,res)=>{
    controller.addQuestion()
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});
router.put('/',(req,res)=>{
    controller.updateQuestion()
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});
router.delete('/',(req,res)=>{
    controller.deleteQuestion()
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});

module.exports = router;