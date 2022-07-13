const express= require('express')

const router = express.Router();

router.get('/',(req,res,next) =>{
    res.send('<form onsubmit="localStorage.setItem(`message`, document.getElementById(`message).value)" action="/product" method="POST"><input id="message" type="text" name"message"><button type="submit">message</button></form>')
});

module.exports = router ;