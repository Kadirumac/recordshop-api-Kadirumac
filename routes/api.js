const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
   res.send('hello from get')
});


var data = [
  { id: 1,
   name:"kadir",
}
]

router.post('/:data', function(req, res, next) {
    const newData = req.params.data
    data.push(newData)

    res.send(data)
});

router.get('/data', function(req, res, next) {
  
    res.send(data)
 });

 router.delete('/:identifier', (req, res) => {
  var a = req.params.identifier
  a.toString()
   data.filter(item => item != a)
   res.send(data)
   console.log(data,req.params.identifier);
   
});



module.exports = router;