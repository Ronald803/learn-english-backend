const test = require('../components/test/network')
const user = require('../components/users/network')
const routes = function(server){
    server.use('/api/test',test);
    server.use('/api/student',(req,res)=>{
        res.send('peticion a usuarios')
    });
    server.use('/api/teacher',(req,res)=>{
        res.send('petición a teachers')
    });
    server.use('/api/users',user)
}

module.exports = routes