var assert = require('chai').assert;
var expect = require('chai').expect;
var request = require('supertest');


function makeServer() {
	var express = require('express');
	var app = express();
	app.get('/', function (req, res) {
		res.status(200).send('ok');
	});
	var server = app.listen(3000, function () {
		var port = server.address().port;
		console.log('Test server listening at port %s', port);
	});
	return server;
}


describe('Loading express', function () {
	var server;
	beforeEach(function () {
		server = makeServer();
	});
	afterEach(function () {
		server.close();
	});
	it('responds to /', function testSlash(done) {
	request(server)
		.get('/')
		.expect(200, done);
	});
	it('404 everything else', function testPath(done) {
		request(server)
			.get('/foo/bar')
			.expect(404, done);
	});
});



/*
describe('GET pages', function() {
	var server;
	beforeEach(function () {
		server = makeServer();
	});
	afterEach(function () {
		server.close();
	});

	it('should return 200 when getting login', function(done){
		request(server).get('/login').expect(200, done);
	});
});



describe('/login', function() {

	// set up the data we need to pass to the login method
	const userCredentials = {
		user: 'Alice', 
		password: 'password'
	}
	// login the user before we run any tests
	var authenticatedUser = request.agent(app);

	before(function(done){
		authenticatedUser.post('/login').send(userCredentials).end(function(err, response){
			expect(response.statusCode).to.equal(200);
			expect('Location', '/');
			done();
		});
	});

	describe('GET /index', function(done){
		//if the user is logged in we should get a 200 status code
		it('should return a 200 response if the user is logged in', function(done){
			authenticatedUser.get('/').expect(200, done);
		});

		//if the user is not logged in we should get a 302 response code and be directed to the /login page
		it('should return a 302 response and redirect to /login', function(done){
			request(app).get('/').expect('Location', '/login').expect(302, done);
		});
	});


	it('should be equal', function(){
		assert.equal(1, 1);
	});

});

*/