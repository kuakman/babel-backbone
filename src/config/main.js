/**
*	RequireJS Config
**/

requirejs.config({

	baseUrl: '/',

	paths: {
		text: 'libs/requirejs-text/text',
		underscore: 'libs/underscore/underscore-min',
		jquery: 'libs/jquery/dist/jquery.min',
		babelhelpers: 'external-helpers',
		backbone: 'libs/backbone/backbone-min'
	},

	shim: {
		underscore: { exports: '_' },
		jquery: ['underscore'],
		babelhelpers: ['jquery'],
		backbone: ['babelhelpers']
	}

});
