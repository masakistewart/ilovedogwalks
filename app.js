var express = require('express'),
app = express(),
router = require('./controllers/routes'),
morgan = require('morgan'),
favicon = require('serve-favicon'),
bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static('public'))


app.use('/', router);
app.listen(process.env.PORT || 8000, function() {
	console.log('listening on 8000');
})

