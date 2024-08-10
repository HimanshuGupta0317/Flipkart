let express = require('express');
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let User = require('../model/Signup')
let router  = express.Router();
router.use(express.json())

router.post('/login', async(req,res)=>{
    let info = req.body;
    let loginData = await User.findOne({email:info.email});
    if(!loginData){
        res.send('user nahi mila')
    }
    else
    {
        let jyoti = await bcrypt.compare(info.password,loginData.password);
        if(!jyoti){
            res.send('password mismatch')
        }
        else{
        // res.send('mill gya')
            let data = JSON.stringify(loginData)
            let token = jwt.sign(data,'bevfucdvxugherk')

            // res.send('login ho gya')
            res.send({token,loginData}+"hello")
        }
    }
})

module.exports = router;