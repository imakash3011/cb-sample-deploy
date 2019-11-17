const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log('Hello this is the sample app')
})

app.get('/hiii',(req,res)=>{
    console.log('hiii'  + req.query.name)
})

app.get('/bye',(req,res)=>{
    console.log('GoodBye!'  + req.query.name)
})


app.listen(4433,()=>{
 console.log('localhost')
})