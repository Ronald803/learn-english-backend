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
module.exports = {add,list,update,remove}