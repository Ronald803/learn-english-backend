const store = require('./store')
function addQuestion(question,answers,test,response){
    return new Promise((resolve,reject)=>{
        const exercise = {
            question,answers,test,response
        }
        store.add(exercise);
        resolve(exercise);
    })
};
function getQuestion(){
    return new Promise((resolve,reject)=>{
        resolve(store.list())
    })
}
function checkAnswer(response,_id){
    return new Promise(async (resolve,reject)=>{
        const question = await store.list({_id: _id})
        let respuesta
        if(question[0].response===response){
            respuesta = "Correcto"
        } else {
            respuesta = "Incorrecto"
        }
        //console.log(question[0]);
        resolve(
            {
            exercise: question[0],
            respuesta,
            response
            }
        )
    })
}
function deleteQuestion(){
    return new Promise((resolve,reject)=>{
        resolve('Peticion delete a api/test, respuesta desde controller')
    })
}

module.exports = {addQuestion,getQuestion,checkAnswer,deleteQuestion}