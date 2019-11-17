const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello this is the sample app')
})

app.get('/hii',(req,res)=>{
    res.send('hiii'  + req.query.name)
})

app.get('/bye',(req,res)=>{
    res.send('GoodBye!'  + req.query.name)
})

app.get('/app',(req,res)=>{
    res.send('welcome to main app')
})


app.listen(PORT,()=>{
 console.log('localhost' + PORT)
})