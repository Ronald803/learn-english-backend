const store     = require('./store')
const bcryptjs  = require('bcryptjs')
const jwt       = require('jsonwebtoken')

function addUser(name,email,cellphone,level,schedule,password){
    return new Promise( async (resolve,reject)=>{
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
        //____________________saving in data base__________________
        const userSaved = await store.add(user);
        //____________________generating jwtoken___________________
        const payload = {uid: userSaved._id}
        const token = jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{expiresIn: '4h'})
        resolve({
            name: userSaved.name,
            rol: userSaved.rol,
            token
        })
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

function updateTestStatus(userID,t){
    return new Promise( async (resolve,reject)=>{
        const student = await store.list({"_id":userID})
        const pointsTests = student[0].points
        console.log({pointsTests});
        const index = pointsTests.findIndex(element=> element.test == t )
        console.log({t},{index});
        pointsTests.splice(index,1)
        console.log({pointsTests});
        store.updateTestStatusStore(userID,pointsTests)
        resolve(student)
    } )

}
module.exports = {addUser,getUser,updateUser,deleteUser,updateTestStatus}