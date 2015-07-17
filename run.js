var connect = require('connect');
var _static = require('serve-static');
var babelMiddleware = require('babel-connect');
var app = connect();

app.use(babelMiddleware({
	options: {
		modules: 'amd'
	},
	src: "src",
	dest: "public",
	ignore: [/libs/, /config/]
}));

app.use(_static(__dirname + '/public'))
	.use(_static(__dirname + '/src/config/'))
	.listen(9393);
