const connect = require('connect');
const  serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(5000, function(){
    console.log('Server running on 5000...');
});
