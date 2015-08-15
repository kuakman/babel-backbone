/**
*	Application View class
*	@class Application
*	@extends Backbone.View
*
*	@requires Backbone
*	@requires view.MyView
*	@requires model.MyModel
**/

import Backbone from 'backbone';
import View from 'view/myview';
import Model from 'model/mymodel';

export default class Application extends Backbone.View {

	/**
	*	@constructor
	*	@param [attrs] {Object} optional attributes
	**/
	constructor(attrs = {}) {
		super(attrs);
		this.myview = new View({ model: this.model, parent: this });
	}

	/**
	*	Render
	*	@public
	*	@method render
	*	@return Application
	**/
	render() {
		super.render();
		this.myview.render();
		return this;
	}

	/**
	*	Application Bootstrap
	*	@static
	*	@method bootstrap
	*	@return Application
	**/
	static bootstrap() {
		var app = new Application({
			el: 'div#main',
			model: new Model(
				{ value: 'Hello Babel &amp; Backbone on ES6!' },
				{ value: 1 }, { value: 2 }, { value: 3 }
			)
		});
		return app.render();
	}

}
