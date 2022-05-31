const express = require('express');
const db = require('../db');


const router = express.Router();



//routes

//show login form
router.get('/form',(req,res)=>{

    res.render('login');
})


router.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;


    db.query('SELECT * FROM login WHERE username = ?',[username],async(error,result)=>{

        if(error) throw error


        if(result.length ==1){
            res.send("success");
    
        }else{
            res.send("LOGIN FAIL");
        }



    })


})



//render from db
router.get('/',(req,res)=>{
     

    //SQL QUERY
    db.query('SELECT * FROM marks',async(error,result)=>{

         //catch error
        if(error) throw error;


        //create array and initialize with result
        let students = [];
        students = result;

        
       res.render('index',{students});
    })
    
})


module.exports = router;



