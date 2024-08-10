let express = require('express');
let mongoose = require('mongoose')
let cors = require('cors')
let app = express()
app.use(cors())
let signup = require('./routes/SignUp')
let login = require('./routes/Login')
let product = require('./routes/Product')

mongoose.connect('mongodb://localhost:27017/Flipkart' ).then(()=>{
    console.log('chal gyaaa');

}).catch(() =>{
    console.log("nhi chala");
})
// app.get('/',(req,res) =>
// {
//     res.send('hello')
// })

app.use(express.json())
app.use('/api',signup)
app.use('/api',login)
app.use('/api',product)

app.listen(5000,() =>
{
    console.log('server running on portno 5000');
})