const express = require('express');
const app = express()

const data = [
    {id:1 , name : 'Imen',age : '23'},
     {id:2 , name : 'Siwar',age : '20'}
]
app.use(express.json())
app.post('/addUser',(req,res)=>{
    const {name,age} = req.body
    data.push({id:data.length++,name,age})
    res.send({message:"User added successfully",count:data.length})
})

app.get('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const user = data.find((element)=>{
        return element.id === id
    })
    if (!user){
        return res.status(404).send('User not found')
    }
    return res.status(200).send(user);
})
app.get('/',(req,res)=>(
    res.send('<h1>Hello to my app express</h1>')
))

const PORT = 4700
app.listen(PORT,()=>(
    console.log('Server running ...')
))