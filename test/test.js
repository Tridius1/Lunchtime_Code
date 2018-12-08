var assert = require('chai').assert;
var expect = require('chai').expect;
var request = require('supertest');
var express = require('express');
var app = express();







/*

describe('GET pages', function() {
	it('should return 200 when getting login', function(done){
		request(app).get('login').expect('Location', '/login').expect(200, done);
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