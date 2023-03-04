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
function updateQuestion(){
    return new Promise((resolve,reject)=>{
        resolve('Peticion update a api/test, respuesta desde controller')
    })
}
function deleteQuestion(){
    return new Promise((resolve,reject)=>{
        resolve('Peticion delete a api/test, respuesta desde controller')
    })
}

module.exports = {addQuestion,getQuestion,updateQuestion,deleteQuestion}