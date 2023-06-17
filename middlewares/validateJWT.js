const { response,request } = require('express');
const jwt = require('jsonwebtoken')
const Model = require('../components/users/model')

const validateJWT = (rolArray)=>{
    return async (req=request,res=response,next)=>{
        const token = req.header('x-token')
        //console.log(rolArray[0]);
        try{
            if(!token && rolArray[0]=='everybody'){return next()}
            if(!token){return res.status(401).json({msg: 'There is no token'})}
            const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY);
            const user = await Model.findById(uid);
            //console.log({user});
            if(!user || user.characteristic==='deleted'){
                return res.status(401).json({
                    msg: 'Invalid Token or Disabled User'
                })
            }
            if(rolArray){
                if(rolArray[0]=='everybody'){
                    req.user = user;
                    return next();
                }    
            }
            let permission = false
            if(rolArray){
                rolArray.map(rol=>{
                    if(rol===user.rol){
                        permission=true
                    }
                })    
            } else{permission = true}
            if(!permission){
                return res.status(401).json({
                    msg: 'You do not have permission for this operation'
                })
            }
            req.user = user;
            next();
        } catch(error) {
            res.status(401).json({
                error,
                msg: 'Something went wrong'
            })
        }
    }
}

module.exports = {
    validateJWT
}