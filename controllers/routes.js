var express = require('express'),
router = express.Router();

router.get('/',function(req,res) { 
  res.render('pages/index')
});

router.get('/about',function(req,res) { 
  res.render('pages/about')
 });

router.get('/prices',function(req,res) { 
  res.render('pages/prices');
});

router.get('/contact',function(req,res) { 
  res.render('pages/contact')
 });

module.exports = router;