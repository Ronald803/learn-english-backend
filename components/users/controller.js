const store = require('./store')
const bcryptjs = require('bcryptjs')
function addUser(name,email,cellphone,level,schedule,password){
    return new Promise( (resolve,reject)=>{
        //____________________encrypting password__________________
        const salt = bcryptjs.genSaltSync();
        const encryptPassword =  bcryptjs.hashSync( password,salt )
        //_________________________________________________________
        const user = {
            name,email,cellphone,level,schedule, 
            password: encryptPassword,
            points: [],
            rol: "student",
            characteristic: "created"
        }
        store.add(user);
        resolve(user)
    } )
}

function getUser(filter){
    return new Promise( (resolve,reject)=>{
        resolve(store.list(filter))
    } )
}

function updateUser(id,body){
    return new Promise( async (resolve,reject)=>{
        const updatedUser = await store.update(id,body)
        resolve(updatedUser)
    } )
}

function deleteUser(id){
    return new Promise( async (resolve,reject)=>{
        const deletedUser = await store.remove(id)
        resolve(deletedUser)
    } )
}
module.exports = {addUser,getUser,updateUser,deleteUser}