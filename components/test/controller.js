
function addQuestion(){
    return new Promise((resolve,reject)=>{
        resolve('Peticion post a api/test, respuesta desde controller')
    })
};
function getQuestion(){
    return new Promise((resolve,reject)=>{
        resolve('Peticion get a api/test, respuesta desde controller')
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