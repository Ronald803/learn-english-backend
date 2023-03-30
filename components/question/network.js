const express  = require('express');
const { validateJWT } = require('../../middlewares/validateJWT');
const router = express.Router();
const controller = require('./controller')

router.get('/',validateJWT(),(req,res)=>{
    controller.getQuestion(req.query)
        .then(questions=>{
            questions.map( q=>{
                q.response = ""
            } )
            res.send(questions)
        })
        .catch()
});
router.post('/',validateJWT('teacher'),(req,res)=>{
    const {question,answers,test,response} = req.body;
    console.log(question,answers,test,response);
    controller.addQuestion(question,answers,test,response)
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});
router.put('/',validateJWT(), async(req,res)=>{
    const token = req.header('x-token')
    const foundUser = req.user
    const {test} = req.body;
    let califications = await Promise.all(
        test.map( (exercise) => {
            return controller.checkAnswer(exercise.response,exercise._id,foundUser._id)
        })
    )
    let points = 0
    califications.map( a => {
        if(a.result === "Correct"){
            points++
        }
    })
    console.log({califications},califications[0].test);
    controller.addPoints(foundUser._id,points,califications[0].test)
    res.send(califications)
});
router.delete('/',validateJWT('admin'),(req,res)=>{
    controller.deleteQuestion()
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});

module.exports = router;