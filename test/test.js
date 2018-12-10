var assert = require('chai').assert;
var expect = require('chai').expect;
var request = require('supertest');



var app = require('../server');
var instance;
before(function(){
	// Clears the cache so a new server instance is used for each test.
       delete require.cache[require.resolve('../server')];
	instance = app.listen(3000);
});
after(function(){
	instance.close();
})

describe('GET pages', function() {
	it('responds to /', function(done) {
	request(instance)
		.get('/')
		.expect(302, done);
	});

	it('responds to /login', function(done) {
	request(instance)
		.get('/login')
		.expect(200, done);
	});

	it('responds to /signup', function(done) {
	request(instance)
		.get('/signup')
		.expect(200, done);
	});

	it('responds to /stockSelect', function(done) {
	request(instance)
		.get('/stockSelect')
		.expect(200, done);
	});
});

/*



describe('Login', function() {

	it('should stay on login for invalid credetials', function(done) {
		request(instance).post('/login').expect(200, done);
	});

});



### FOR REFERENCE; DOESN'T WORK ###


describe('Login', function() {

	// set up the data we need to pass to the login method
	const userCredentials = {
		user: 'Alice', 
		password: 'password'
	}
	// login the user before we run any tests
	var authenticatedUser = request.agent(instance);

	before(function(done){
		authenticatedUser.post('/login').set(userCredentials).end(function(err, response){
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
			request(instance).get('/').expect('Location', '/login').expect(302, done);
		});
	});


	it('should be equal', function(){
		assert.equal(1, 1);
	});

});




describe('GET pages', function() {
	var server;
	beforeEach(function () {
		server = makeServer();
	});
	afterEach(function () {
		server.close();
	});

	it('should return 200 when getting login', function(done){
		request(server).get('/signup').expect(200, done);
	});
});





*/