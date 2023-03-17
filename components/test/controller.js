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
        let result
        if(question[0].response===response){
            result = "Correct"
        } else {
            result = "Incorrect"
        }
        //console.log(question[0]);
        resolve(
            {
            "_id": question[0]._id,
            correctAnswer: question[0].response,
            result,
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