const { param } = require('express/lib/request');
const User = require("../models/user.model.js");

exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
     res.status(400).send({
       message: "Content can not be empty!"
     });
   }
   // Create a Tutorial
   const user = new User({
     name: req.body.name,
     city: req.body.city,
     remark: req.body.remark,
     age:req.body.age,
     phone:req.body.phone,
     area:req.body.area
   });
   // Save Tutorial in the database
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
  
};
exports.findAllPublished = (req, res) => {
  
};
exports.update = (req, res) => {
  
};
exports.delete = (req, res) => {
  
};
exports.deleteAll = (req, res) => {
  
};
