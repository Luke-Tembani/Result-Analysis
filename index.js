const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');
const port = 8000;
const pageRouter = require('./pages/router');



const app = express();


//Templating Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Parsing data from forms
app.use(express.urlencoded({extended: true}));//parse urlencoded bodies as sent by html forms
app.use(express.json());  //parse urlencoded bodies as sent by API Clients

//Routing

app.use('/',pageRouter);



app.listen(port,()=>{
    console.log('Running on port 8000');
})