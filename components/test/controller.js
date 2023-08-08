const store = require('./store')

function addTest(name,number,description,level,teacher,questions,type,aux,schedule){
    return new Promise( (resolve,reject)=>{
        let auxiliar
        aux ? auxiliar=aux : auxiliar=""
        const test = {
            name,number,description,level,teacher,questions,type,auxiliar,schedule
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

function getTest(requestingUserInfo){
    return new Promise( async (resolve,reject)=>{
        let tests = await store.list();
        
        const userRol = requestingUserInfo.rol;
        const userLevel = requestingUserInfo.level;
        const userPoints = requestingUserInfo.points;
        if(!requestingUserInfo || userRol=="Admin" || userRol=="Teacher" ){return resolve(tests)};
        let testsWithPoints = [];
        let testsAllowedByLevel = [];
        tests.map((test,index)=>{
            test.level.map(lev=>{
                if(lev===userLevel){
                    let points = null
                    const {_id,name,number,description,level,teacher,questions,auxiliar,type} = test
                    userPoints.map((userScores,ind)=>{
                        if(userScores.test == test.number){
                            points = Math.ceil((userScores.points*100)/test.questions)
                        }
                    })
                    let testModified = {_id,name,number,description,level,teacher,questions,auxiliar,type,points}
                    testsAllowedByLevel.push(testModified)
                }
            })
        })
        resolve( testsAllowedByLevel )
    } )
}

module.exports = { addTest,getTest }