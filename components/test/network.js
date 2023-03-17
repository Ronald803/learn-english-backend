const express  = require('express');
const { validarJWT } = require('../../middlewares/validarJWT');
const router = express.Router();
const controller = require('./controller')

router.get('/',validarJWT(),(req,res)=>{
    controller.getQuestion()
        .then(questions=>{
            questions.map( q=>{
                q.response = ""
            } )
            res.send(questions)
        })
        .catch()
});
router.post('/',validarJWT('teacher'),(req,res)=>{
    const {question,answers,test,response} = req.body;
    console.log(question,answers,test,response);
    controller.addQuestion(question,answers,test,response)
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});
router.put('/',validarJWT('teacher'), async(req,res)=>{
    const {test} = req.body;
    let califications = await Promise.all(
        test.map( (exercise) => {
            return controller.checkAnswer(exercise.response,exercise._id)
        })
    )
    res.send(califications)
});
router.delete('/',validarJWT('admin'),(req,res)=>{
    controller.deleteQuestion()
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});

module.exports = router;