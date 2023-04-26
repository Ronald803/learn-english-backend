const Model = require('./model')

async function add(user){
    const newUser = new Model(user);
    const userSaved = newUser.save();
    return userSaved
}
async function list(filter){
    const users = await Model.find(filter)
    return users
}
async function update(id,body){
    const foundUser = await Model.findById(id);
    foundUser.rol = body.rol;
    foundUser.characteristic = "modified";
    const updatedUser = foundUser.save();
    return updatedUser
}
async function remove(id){
    const foundUser = await Model.findById(id);
    foundUser.characteristic = "deleted";
    const deletedUser = foundUser.save();
    return deletedUser;
}
async function addPoints(id,points,test){
    //console.log({id},{points},{test});
    const foundUser = await Model.findById(id);
    let index  
    foundUser.points.map((element,i)=>{
        if(element.test == test){
            //console.log("son iguales",i);
            index=i;
        }
    })
    //console.log({index});
    //console.log(typeof(index),"tipo de index__");
    let newScore
    if(index!=-1){ 
        //foundUser.points[index].points = points 
        let notes=foundUser.points[index]
        newScore = {
            test: notes.test,
            points: points,
            questions: notes.questions
        }
        //console.log({newScore});
        foundUser.points.splice(index,1)
        foundUser.points.push(newScore)
    }
    const score = await foundUser.save()
    return score
}
async function setTestScore(id,object){
    const foundUser = await Model.findById(id);
    foundUser.points.push(object);
    foundUser.save()
}

async function updateTestStatusStore(id,points){
    const foundUser = await Model.findById(id);
    foundUser.points = points;
    foundUser.save()
}
module.exports = {add,list,update,remove,addPoints,setTestScore,updateTestStatusStore}