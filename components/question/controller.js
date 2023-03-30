const store = require('./store')
const storeUser = require('../users/store')
function addQuestion(question,answers,test,response){
    return new Promise((resolve,reject)=>{
        const exercise = {
            question,answers,test,response
        }
        store.add(exercise);
        resolve(exercise);
    })
};
function getQuestion(filter){
    return new Promise((resolve,reject)=>{
        resolve(store.list(filter))
    })
}
function checkAnswer(response,_id,userID){

    return new Promise(async (resolve,reject)=>{
        //const student = await 
        const question = await store.list({_id: _id})
        let result
        if(question[0].response===response){
            result = "Correct"
        } else {
            result = "Incorrect"
        }
        console.log(question[0]);
        resolve(
            {
            "_id": question[0]._id,
            correctAnswer: question[0].response,
            result,
            test: question[0].test
            }
        )
    })
}
function deleteQuestion(){
    return new Promise((resolve,reject)=>{
        resolve('Peticion delete a api/test, respuesta desde controller')
    })
}
async function addPoints (id,points,test){
    const user = await storeUser.list({_id:id})
    const index = user[0].points.findIndex(element=>{return element.test===test})
    if(index===-1){
        const object = {test,points}
        storeUser.addPoints(id,object)
    } 
}

module.exports = {addQuestion,getQuestion,checkAnswer,deleteQuestion,addPoints}