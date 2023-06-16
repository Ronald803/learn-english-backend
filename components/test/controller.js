const store = require('./store')

function addTest(name,number,description,level,teacher,questions,type,aux){
    return new Promise( (resolve,reject)=>{
        let auxiliar
        aux ? auxiliar=aux : auxiliar=""
        const test = {
            name,number,description,level,teacher,questions,type,auxiliar
        };
        for(const property in test){
            if(test[property]===undefined){
                console.log(test[property]);
                return reject("Datos incompletos")
            }
        }
        store.add(test);
        resolve(test);
    } )
}

function getTest(requestingUserScores){
    return new Promise( async (resolve,reject)=>{
        let tests = await store.list()
        if(!requestingUserScores){return resolve(tests)}
        let testsWithPoints = [];
        tests.map((test,index)=>{
            let tookTheTest = false; 
            let points = null
            const {_id,name,number,description,level,teacher,questions,auxiliar,type} = test
            requestingUserScores.map((userScores,ind)=>{
                if(userScores.test == test.number){
                    points = Math.ceil((userScores.points*100)/test.questions)
                }
            })
            let testModified = {_id,name,number,description,level,teacher,questions,auxiliar,type,points}
            testsWithPoints.push(testModified)
        })
        resolve( testsWithPoints )
    } )
}

module.exports = { addTest,getTest }