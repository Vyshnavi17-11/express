var express =require('express');
const app = express();
const port=1600;
app.get('/',(req,res)=>{
    res.send("Hy");

});
app.listen(port,()=>{
    console.log('server is running on &{port}')
});



