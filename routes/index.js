var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/',function(req,res){
	console.log((__dirname+'/public/index.html'))
	res.sendFile(__dirname+'/public/index.html');
})

module.exports = router;
