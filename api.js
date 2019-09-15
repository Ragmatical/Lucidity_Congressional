var express = require('express')
	, path = require('path')
	, bodyParser = require('body-parser')
	, http = require('http')
	, async = require('async')
	, fs = require('fs')
	, mongoose = require('mongoose')
	, stream = require('stream')
	, cors = require('cors')
	, configs = require('./config.js')
	, parser = require('ua-parser-js')
	, geoip = require('geoip-lite')
	, userdata = require('./schemas/userdata.js').getModel()
	, user = require('./schemas/users.js').getModel()
	, task = require('./schemas/todos.js').getModel()
;

var app = express()
	, port = parseInt(process.env.PORT || '3007')
	, server = http.createServer(app)
	, corsOptions = {
      origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204
    }
;

app.set('trust proxy', true);

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors(corsOptions));

app.post('/login/:user/:name', (req, res, next) => {
	console.log(req.params, req.body)
	res.send("OK")
})

app.post('/signout/:user/:name', (req, res, next) => {
	console.log(req.params, req.body)
	res.send("OK")
})

app.post('/signup/:user', (req, res, next) => {
	console.log("checkpoint")
	const newuser = new user({
		username: req.params.user
		, password: req.body.password
		, email: req.body.email
		, phonenumber: req.body.phonenumber
		, stripeCustomerId: 1
		, dateCreated: new Date()
		, dateUpdated: new Date()
	})
	newuser.save((err) => {
		if(err){res.send(err)
			console.log(err)} 
		else res.send("OK CREATED")
	})
})

app.patch('/changepassword',()=>{
	res.send('OK')
})

app.patch('/changeemail',()=>{
	console.log(req.params)
	res.send('OK')
})

app.get('/todo/:user/:taskid', (req, res, next) => {
	console.log(req.params)
	res.send('OK')
})

app.post('/todo/:user/:taskid', (req, res, next) => {
	const newtask = new task({
		assignmentName: req.params.taskid
		, completed: false
		, description: req.body.description
		, dateCreated: new Date()
		, dateUpdated: new Date()
	})
	newtask.$__save((err) => {
		if(err) res.send(err)
		else res.send("TASK CREATED")
	})
})

app.delete('/todo/:user/:taskid', (req, res, next) => {
	console.log(req.params)
	res.send("OK")
})

app.patch('/todo/:user/:taskid', (req, res, next) => {
	console.log(req.params)
	res.send('OK')
})

app.get('/', (req, res, next) => {
	console.log('home');
	var geo = geoip.lookup(req.ip) || {};
	var ua = parser(req.headers['user-agent']);
	var date = new Date();
	var site = req.query.site;
	var action = req.query.action;
	var id = req.query.id;
	var time = req.query.time;
	var sim = req.query.sim;
	var subject = req.query.subject;
	var loadsimtime = req.query.loadsimtime;
	var data = new userdata({
		site: site
		, loadsimtime: loadsimtime || -1
		, sim: sim || -1
		, subject: subject
		, time: time || -1
		, action: action
		, id: id
		, date: date
		, ip: req.ip
		, range: geo.range
		, country: geo.country
		, region: geo.region
		, city: geo.city
		, ll: geo.ll
		, metro: geo.metro || -1
		, area: geo.area || -1
		, eu: geo.eu || -1
		, timezone: geo.timezone || -1
		, ua: ua.ua
		, browser: ua.browser
		, engine: ua.engine
		, device: ua.device
		, cpu: ua.cpu
	})
	data.save();
	res.send("ok");
});

function startServer() {
	server.on('listening', () => {
		var addr = server.address()
			, bind = typeof addr === 'string'
				? 'pipe ' + addr
				: 'port ' + addr.port
		;
		console.log('Listening on ' + bind);
	});
	server.listen(port);
}

mongoose.connect(configs.dbUri, startServer);
