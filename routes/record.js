const express = require("express");
const router = express.Router();

const recordModel = require("../models/records");


router.get("/", (req, res, next) => {
    const records = recordModel.find();
  
    records
      .then((data) =>{   
  
     
      res.status(200).send(data);
       
      })
      .catch(err => {
        console.error(err);
        res.send("Server Error");
      });
  });



router.post("/", (req, res) => {
  

    const {
        artist,
        album,
        title
    } = req.body;
  
    const post = new recordModel({
        artist,
        album,
        title
    });
  
    post
      .save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({ message: err });
      });
  
    console.log(req.body);
  });

  module.exports = router;