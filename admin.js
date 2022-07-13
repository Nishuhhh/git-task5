const express= require('express')

const router = express.Router();

router.use('/add-product' , (req,res,next) =>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/product" method="POST"><input id="username" type="text" name"title"><button type="submit">username</button></form>')
});

router.post('/product' , (req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router ;