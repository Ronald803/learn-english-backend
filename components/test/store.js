const Model = require('./model');

async function add(test){
    const newTest = new Model(test);
    newTest.save();
}

async function list(filter){
    const tests = await Model.find(filter)
    return tests
}

module.exports = { add,list }