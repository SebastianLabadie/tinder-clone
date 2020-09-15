const {Schema,model} = require('mongoose')

const cardSchema= new Schema({
    name:String,
    img:String
})

module.exports=model('cards',cardSchema)