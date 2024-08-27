const express = require('express');
const app = express();

app.get('/Get', async(req,res)=>{
 res.send("hello mf");
});

app.listen(5000,()=>{
    console.log('listening on port 3000');
});