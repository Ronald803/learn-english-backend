const question = require('../components/question/network')
const user = require('../components/users/network')
const auth = require('../components/auth/network')
const test = require('../components/test/network')
const gamesStop = require('../components/games/stop/network.games.stop')
const routes = function(server){
    server.use('/api/question',question);
    server.use('/api/teacher',(req,res)=>{
        res.send('petición a teachers')
    });
    server.use('/api/users',user);
    server.use('/api/auth',auth);
    server.use('/api/test',test);
    server.use('/api/games/stop',gamesStop);
}

module.exports = routes