const store     = require('./store.games.stop');

function addRound(letter,numberOfWinners){
    return new Promise(async (resolve,reject)=>{
        if(!letter || !numberOfWinners){reject("Incomplete information")}
        const newRound = {
            letter,
            numberOfWinners,
            winners: [],
            state: true
        }
        const roundSaved = await store.add(newRound)
        resolve(roundSaved)
    })
}
function updateRound(id,body,user){
    return new Promise(async(resolve,reject)=>{
        console.log({user});
        const answer = {
            body,
            user: user.name
        }
        const answerSaved = await store.update(id,answer)
        resolve(answerSaved)
    })
}
function getRound(){
    return new Promise((resolve,reject)=>{
        resolve(store.list())
    })
}
function deleteRound(id){
    return new Promise(async(resolve,reject)=>{
        const deletedRound = await store.remove(id)
        resolve(deletedRound)
    })
}
module.exports = {addRound,updateRound,getRound,deleteRound}