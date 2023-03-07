const Model = require('./model')

async function add(user){
    const newUser = new Model(user);
    newUser.save();
}

module.exports = {add}