const express = require('express')
const cors=require('cors')
require('./database')
const cardModel=require('./models/Cards')


// App config
const app=express()
const port = process.env.PORT || 4000

// middl
app.use(express.json())
app.use(cors())


// apiendpoint 
app.get('/',(req,res)=>res.send('ITS ALIVEEEEEE'))

app.post('/tinder/cards',async (req,res)=>{
    const {name,img}=req.body
    const newCard= new cardModel({name,img})
    try {
        await newCard.save()
        res.status(201).send('CARD CREATED :D')
        
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/tinder/cards',async (req,res)=>{
    const cards= await cardModel.find()
    res.status(200).send(cards)
})
// listener
async function main(){
    await app.listen(port)
    console.log('Server on port: ' + port)
}
main()