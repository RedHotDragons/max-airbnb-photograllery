var pg = require('pg');

var connectionString = "postgres://userName:password@localhost/ip:5432/postgres";

var pgClient = new pg.Client(connectionString);

pgClient.connect();

var query = pgClient.query("SELECT city from listings where id = 3");

console.log('testingPSQL');
console.log(query);



// var assert = require('assert');



// describe('Array', function() {
//   describe('#indexOf', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });