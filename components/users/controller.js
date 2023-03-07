const store = require('./store')
function addUser(name,email,cellphone,level,schedule){
    return new Promise( (resolve,reject)=>{
        const user = {
            name,email,cellphone,level,schedule,
            points: [],
            rol: "student"
        }
        store.add(user);
        resolve(user)
    } )
}

function getUser(){
    return new Promise( (resolve,reject)=>{
        resolve('Petición getUser desde controller')
    } )
}

function updateUser(){
    return new Promise( (resolve,reject)=>{
        resolve('Petición updateUser desde controller')
    } )
}

function deleteUser(){
    return new Promise( (resolve,reject)=>{
        resolve('Peteición deleteUser desde controller')
    } )
}
module.exports = {addUser,getUser,updateUser,deleteUser}