var express = require('express'),
router = express.Router(),
nodemailer = require('nodemailer');
var smtTrans, mailOpts;

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

router.get('/email',function(req,res) { 
  res.render('pages/email');
 });

router.post('/email',function(req,res) { 

	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'infoilovedogwalks@gmail.com',
	    pass: 'TotoTigger1982'
	  }
	}, {
	// default values for sendMail method 
	from: req.body.email,
	headers: {
	    'My-Awesome-Header': '123'
	}
	});

	transporter.sendMail({
	    to: 'infoilovedogwalks@gmail.com',
	    subject: 'Work Email!!!',
	    text: req.body.message
	});
  res.redirect('/contact');
 })

module.exports = router;