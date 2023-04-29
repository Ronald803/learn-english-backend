const express  = require('express');
const { validateJWT } = require('../../middlewares/validateJWT');
const router = express.Router();
const controller = require('./controller')
const storeUser = require('../users/store')

router.get('/',validateJWT(),(req,res)=>{
    const user = req.user
    //console.log(user.points);
    //console.log(req.query.test);
    const testAlreadyTaken = user.points.some( element => {
        return element.test == req.query.test
    })
    if(testAlreadyTaken){
        return res.send("Ya tomaste este examen")
    }
    //console.log({testAlreadyTaken});
    controller.getQuestion(req.query,user)
        .then(questions=>{
            questions.foundedQuestions.map( q=>{
                q.response = ""
            } )
            res.send(questions)
        })
        .catch()
});
router.post('/',validateJWT(['teacher','admin']),(req,res)=>{
    const {question,answers,test,response} = req.body;
    //console.log(question,answers,test,response);
    controller.addQuestion(question,answers,test,response)
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});
router.put('/',validateJWT(['teacher','admin']), async(req,res)=>{
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
    //console.log({califications},califications[0].test);
    const score = await storeUser.addPoints(foundUser._id,points,califications[0].test)
    res.send({califications,score})
});
router.delete('/',validateJWT(['admin']),(req,res)=>{
    controller.deleteQuestion()
        .then( (questions)=>{
            res.send(questions)
        } )
        .catch()
});

module.exports = router;