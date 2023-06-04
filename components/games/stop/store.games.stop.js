const Model = require('./model.games.stop')

async function add(round){
    const newRound = new Model(round);
    const roundSaved = await newRound.save();
    return roundSaved
}
async function update(id,body){
    const foundRound = await Model.findById(id);
    if(foundRound.numberOfWinners > foundRound.winners.length){
        foundRound.winners.push(body)
        const updatedRound = await foundRound.save()
        return updatedRound.winners.length
    } else {
        return -1
    }    
}
async function list(id){
    const rounds = await Model.findById(id)
    return rounds
}
async function remove(id){
    const foundRound = await Model.findByIdAndDelete(id)
    return foundRound
}
module.exports = {add,update,list,remove}