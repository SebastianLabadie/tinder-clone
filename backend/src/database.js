const mongoose = require('mongoose')

const URI='mongodb+srv://sebastian:kIcJbyGfuMnNSO9T@cluster0.hkzye.mongodb.net/tinder?retryWrites=true&w=majority' 


mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
