const Model = require('./model')

async function list(filter){
    const exercise = await Model.find(filter)
    return exercise
}
async function add(exercise){
    const newQuestion = new Model(exercise);
    console.log("llega a store");
    newQuestion.save();
}

module.exports = {list,add}