const mysql = require('mysql');

//database connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"gradingsystem"
});

//connect to db
db.connect((error)=>{

    if(error){
        console.log(error);
    }else{

        console.log("Connected Successfully");
    }
})


module.exports = db;