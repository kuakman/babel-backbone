var connect = require('connect');
var _static = require('serve-static');
var babelMiddleware = require('babel-connect');
var app = connect();

app.use(babelMiddleware({
	options: {},
	src: "src",
	dest: "public",
	ignore: /libs/
}));

app.use(_static(__dirname + '/public'))
	.use(_static(__dirname + '/node_modules/babel-connect/node_modules/babel-core'))
	.listen(9393);
