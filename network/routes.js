const test = require('../components/test/network')
const user = require('../components/users/network')
const auth = require('../components/auth/network')
const routes = function(server){
    server.use('/api/test',test);
    server.use('/api/teacher',(req,res)=>{
        res.send('petición a teachers')
    });
    server.use('/api/users',user)
    server.use('/api/auth',auth)
}

module.exports = routes