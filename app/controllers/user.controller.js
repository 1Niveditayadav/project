const { param } = require('express/lib/request');
const User = require("../models/user.model.js");

exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
   }
   // Create a User
   const user = new User({
     name: req.body.name,
     city: req.body.city,
     remark: req.body.remark,
     age:req.body.age,
     phone:req.body.phone,
     area:req.body.area
   });
   // Save User in the database
   User.create(user, (err, data) => {
     if (err)
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the User."
       });
     else res.send(data);
   });
 };
 exports.findAll = (req, res) => {
   const name = req.query.name;
   User.getAll(name, (err, data) => {
     if (err)
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving tutorials."
       });
     else res.send(data);
   });
 };
exports.findOne = (req, res) => {
   User.findById(req.params.id,(err,data)=>{
        if(err){
          if(err.kind==="not found")
          {
            res.status(404).send({
              message:`not found user with id ${req.params.id}`
            });
          }else{
              res.status(500).send({
                message:"error retrieve user with id"+req.params.id
              });    
          }
        }else res.send(data);
   });
};

exports.update = (req, res) => {
    if(!req.body)
    {
      res.status(400).send({
        message:"content can not empty!"
      });
    }
    console.log(req.body);
    User.updateById(req.params.id,
    new User(req.body),
    (err,data)=>{
      if(err){
        if(err.kind==="not found"){
          res.status(404).send({
            message:`not found user with id `+req.params.id
          });
        }else{
          res.status(500).send({
            message:"error updating user with id "+req.params.id
          });
        }
      }else res.send(data);
    });
};

exports.delete = (req, res) => {
  User.remove(req.params.id,(err,data)=>
  {
    if(err)
    {
      if(err.kind==="not found"){
        res.status(404).send({
          message:`not found user with id ${req.params.id}.`
        });
      }else{
        res.status(500).send({
          message:"could not delete user with id "+req.paramas.id
        });
      }
    }else res.send({ message:`user was deleted successfully!`  });
  });
};
exports.deleteAll = (req, res) => {
  User.removeAll((err,data) =>{
    if(err)
     res.status(500).send({
       mesage:
       err.message || "some error occured while removing all user"
     });
       else 
          res.send({message: `All users were deleted successfully !`});
  });
};
