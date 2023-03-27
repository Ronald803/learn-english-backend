const question = require('../components/question/network')
const user = require('../components/users/network')
const auth = require('../components/auth/network')
const test = require('../components/test/network')

const routes = function(server){
    server.use('/api/question',question);
    server.use('/api/teacher',(req,res)=>{
        res.send('petición a teachers')
    });
    server.use('/api/users',user)
    server.use('/api/auth',auth)
    server.use('/api/test',test)
}

module.exports = routes