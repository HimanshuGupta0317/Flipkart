let express = require('express');
let User = require('../model/Signup')
let bcrypt = require('bcrypt')
let router  = express.Router();
// router.use(express.json())
router.post('/users',async(req,res)=>{
    // console.log(req.body);
    let data = req.body
    let {email} = req.body
    let jyoti =  await User.findOne({email});
    if(jyoti){
        res.send('user exist')
    }
    else{

       data. password = await  bcrypt.hash(data.password,10)
    //    console.log(data.password);

       res.send('hiiiii')
       let user = new User({
        Firstname:data.Firstname,
        lastname:data.lastname,
        email:data.email,
        password:data.password
       })
       await user.save()
    }
})

module.exports=router;