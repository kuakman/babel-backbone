/**
*	RequireJS Config
**/

requirejs.config({

	baseUrl: '/',

	paths: {
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

require(['views/myview'], function(MyView) {

	var myModel = new Backbone.Model();
	myModel.set({ prop: 1 }, { silent: true });

	var myView = new MyView({ el: 'div#global', model: myModel });
	myView.render();

	myModel.set('prop', 2);

});
