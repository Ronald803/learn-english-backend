const express  = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/',(req,res)=>{
    controller.getQuestion()
        .then( (exercise)=>{
            res.send(exercise)
        } )
        .catch()
});
router.post('/',(req,res)=>{
    const {question,a,b,c,d,e,answer,test} = req.body;
    console.log(question,a,b,c,d,e,answer,test);
    controller.addQuestion(question,a,b,c,d,e,answer,test)
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});
router.put('/',(req,res)=>{
    const {answer,_id} = req.body;
    console.log(answer,_id);
    controller.checkAnswer(answer,_id)
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