var connect = require('connect');
var _static = require('serve-static');
var babelMiddleware = require('babel-connect');
var app = connect();

app.use(babelMiddleware({
	options: {
		// No matter what we do, we need an amd-loader like requirejs,
		// cujojs "curl" (https://github.com/cujojs/curl) in the browser.
		// Until es6 spec get standarized (module loaders).
		modules: 'amd',
		// Avoids es5 code duplication for module loaders on each file.
		externalHelpers: true
	},
	src: "src",
	dest: "public",
	ignore: [/libs/, /config/]
}));

app.use(_static(__dirname + '/public'))
	.use(_static(__dirname + '/node_modules/babel-core'))
	.use(_static(__dirname + '/src/config/'))
	.use(_static(__dirname + '/src/partials/'))
	.listen(9393);
