var request = require('supertest')
var test = require('tape')

var app = require('../index.js')

// test('Working.', function (t) {
//   t.pass()
//   t.end()
// })

test('/users route returns an object containing an array of users', function (t){
  //Arrange
  var expected = true
  // Act
  request(app)
  .get ('/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res){
    //Assert
    t.equal(err, null)
    t.equal(Array.isArray(res.body.users), expected)
    t.end()
  })
})
//Close any open connections
test.onFinish(function(){
  process.exit(0)
})
