const express  = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/',(req,res)=>{
    controller.getQuestion()
        .then(questions=>{
            questions.map( q=>{
                q.response = ""
            } )
            res.send(questions)
        })
        .catch()
});
router.post('/',(req,res)=>{
    const {question,answers,test,response} = req.body;
    console.log(question,answers,test,response);
    controller.addQuestion(question,answers,test,response)
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});
router.put('/', async(req,res)=>{
    const {test} = req.body;
    let califications = await Promise.all(
        test.map( (exercise) => {
            return controller.checkAnswer(exercise.response,exercise._id)
        })
    )
    res.send(califications)
});
router.delete('/',(req,res)=>{
    controller.deleteQuestion()
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});

module.exports = router;