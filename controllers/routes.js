var express = require('express'),
router = express.Router(),
nodemailer = require('nodemailer');
var smtTrans, mailOpts;
var reviewss = require('../public/reviews.js'),
sm = require('sitemap');

var sitemap = sm.createSitemap ({
	hostname: 'http://www.ilovedogwalks.co.uk',
	cacheTime: 600000,
	urls: [
    { url: '/',  changefreq: 'daily', priority: 0.3 },
    { url: '/about/',  changefreq: 'monthly',  priority: 0.7 },
    { url: '/prices/'},    // changefreq: 'weekly',  priority: 0.5 
    { url: '/contact/' },
    { url: '/reviews/' },
    { url: '/email/'}
  ]
});

router.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});

router.get('/google6092e02383ea4ca4.html',function(req,res) { 
  res.sendFile(__dirname + '/google6092e02383ea4ca4.html')
 });


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

router.get('/reviews',function(req,res) {
  res.render('pages/reviews', {reviews: reviewss});
 });

router.post('/email',function(req,res) { 

var transporter = nodemailer.createTransport(
  {
  service: 'Hotmail',
  auth: {
    user: 'ilovedogwalks@hotmail.com',
    pass: 'MyWorkPassword123'
  }
}, {
  from: req.body.email,
  headers: {
      'My-Awesome-Header': '123'
  }
});
  console.log(req.body.email)
	transporter.sendMail({
	    to: 'ilovedogwalks@hotmail.com',
	    subject: 'Work Email!!!',
	    text: "From: " + req.body.email + "\n\n Message: " + req.body.message
	}).catch(function(err) {
		console.log(err)
	});
  	res.redirect('/prices');
 })

module.exports = router;