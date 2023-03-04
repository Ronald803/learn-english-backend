const Model = require('./model')

async function list(){
    const exercise = await Model.find()
    return exercise
}
async function add(exercise){
    const newQuestion = new Model(exercise);
    console.log("llega a store");
    newQuestion.save();
}

module.exports = {list,add}