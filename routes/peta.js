var express = require('express');
var router = express.Router();
 

/* GET peta page. */

router.get('/peta',function (req,res,next){
  res.render('peta')
})

module.exports = router;
