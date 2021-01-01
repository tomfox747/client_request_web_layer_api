const App = require('./app');
const port = 8080;

App.listen(port,() =>{
    console.log(`Client request web layer is listening on port ${port}`);
})