const fs = require('fs');
const http = require('http');
const got = require('got');
const {promisify} = require('util');
const stream = require('stream');

const pipeline = promisify(stream.pipeline);

(async () => {
	await pipeline(
		got.stream('http://jsonplaceholder.typicode.com/posts'),
		fs.createWriteStream(__dirname + '/result/posts.json')
	);

})();


/*

const url = got.stream('http://jsonplaceholder.typicode.com/posts');

var myRS = fs.createReadStream(url, 'utf8');
var myWS = fs.createWriteStream(__dirname + '/result/posts.json');

myRS.pipe(myWS);

*/
