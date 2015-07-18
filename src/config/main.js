/**
*	RequireJS Config
**/

requirejs.config({

	baseUrl: '/',

	paths: {
		text: 'libs/requirejs-text/text',
		underscore: 'libs/underscore/underscore-min',
		jquery: 'libs/jquery/dist/jquery.min',
		backbone: 'libs/backbone/backbone-min'
	},

	shim: {
		underscore: { exports: '_' },
		jquery: ['underscore'],
		backbone: ['jquery']
	}

});
