const { response,request } = require('express');
const jwt = require('jsonwebtoken')
const User = require('../components/users/model')

const validarJWT = (rol)=>{
    return async (req=request,res=response,next)=>{
        const token = req.header('x-token')
        if(!token){
            return res.status(401).json({
                msg: 'There is no token'
            })
        }
        try{
            const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY);
            //console.log({uid});
            const user = await User.findById(uid);
            console.log({user});
            if(!user || user.characteristic==='deleted'){
                return res.status(401).json({
                    msg: 'Invalid Token or Disabled User'
                })
            }
            if(rol && user.rol !== rol){
                return res.status(401).json({
                    msg: 'You do not have permission for this operation'
                })
            }
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
    validarJWT
}