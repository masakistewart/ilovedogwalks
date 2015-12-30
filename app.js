var express = require('express'),
app = express(),
router = require('./controllers/routes'),
morgan = require('morgan');

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(express.static('public'))

app.use('/', router);
app.listen(process.env.PORT || 8000, function() {
	console.log('listening on 8000');
})

