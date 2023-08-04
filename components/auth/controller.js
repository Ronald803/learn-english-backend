const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const storeUser = require('../users/store')
function login(email,password){
    return new Promise( async(resolve,reject)=>{
        if(!email || !password){return reject('Incomplete data')}
        //__________________ Checking email exists _____________________
        const user = await storeUser.list({email})
        if(user.length<1){return reject('Información incorrecta')}
        //__________________ Checking user is active __________________
        if(user[0].characteristic=="deleted"){return reject('Usuario inhabilitado')}
        //__________________ checking password is correct _____________
        const validPassword = bcryptjs.compareSync(password,user[0].password)
        if(!validPassword){return reject('Información incorrecta')}
        //__________________ generating jwtoken _______________________
        const payload = {uid: user[0]._id}
        const token = jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{expiresIn: '4h'})
        resolve({
            name: user[0].name,
            rol: user[0].rol,
            schedule: user[0].schedule,
            level: user[0].level,
            token
        })
    } )
}

module.exports = {login}