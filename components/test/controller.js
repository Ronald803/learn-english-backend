const store = require('./store')
function addQuestion(question,a,b,c,d,e,answer,test){
    return new Promise((resolve,reject)=>{
        const exercise = {
            question,a,b,c,d,e,answer,test
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
function checkAnswer(answer,_id){
    return new Promise(async (resolve,reject)=>{
        const question = await store.list({_id: _id})
        let respuesta
        if(question[0].answer===answer){
            respuesta = "Respuesta correcta"
        } else {
            respuesta = "Respuesta incorrecta"
        }
        console.log(question[0]);
        resolve({
            exercise: question[0],
            respuesta
        })
    })
}
function deleteQuestion(){
    return new Promise((resolve,reject)=>{
        resolve('Peticion delete a api/test, respuesta desde controller')
    })
}

module.exports = {addQuestion,getQuestion,checkAnswer,deleteQuestion}