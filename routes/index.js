const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        "Author": "Sandy pracoyo",
        "Github": "https://github.com/sandypracoyo",
        "Project": "Backend perpus online"
    })
})

module.exports=router