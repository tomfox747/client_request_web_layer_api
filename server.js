const App = require('./app');
const port = 8080;

App.get('/check',(req,res) =>{
    res.send('check hit');
})

App.listen(port,() =>{
    console.log(`Client request web layer is listening on port ${port}`);
})