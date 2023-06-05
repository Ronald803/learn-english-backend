const Model = require('./model.games.stop')

async function add(round){
    const newRound = new Model(round);
    const roundSaved = await newRound.save();
    return roundSaved
}
async function update(id,body){
    const foundRound = await Model.findById(id);
    if(foundRound.numberOfWinners > foundRound.winners.length){
        foundRound.winners.push(body);
        if(foundRound.numberOfWinners === foundRound.winners.length){foundRound.state = false;}
        const updatedRound = await foundRound.save();
        return updatedRound.winners.length
    } else {
        return -1
    }    
}
async function list(filter){
    const rounds = await Model.find(filter)
    return rounds
}
async function remove(id){
    const foundRound = await Model.findByIdAndDelete(id)
    return foundRound
}
module.exports = {add,update,list,remove}