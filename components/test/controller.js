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

function getTest(){
    return new Promise( (resolve,reject)=>{
        resolve( store.list() )
    } )
}

module.exports = { addTest,getTest }