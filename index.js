const express = require('express');
const cors = require("cors");
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
const app = express();
// app.use(bodyParser.json());
var corsOption = {
    origin:"http://localhost:5000"
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.get("/",(req,res)=>{
//     res.json({message:"Welcome !!"});
// })
const port = 5000;
require("./app/routes/user.routes")(app);
app.listen(port,()=>{
    console.log(`Now listening on port ${port}`);
});

