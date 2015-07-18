/**
*	MyModel Model class
*	@class model.MyModel
*	@extends Backbone.Model
*
*	@requires Backbone
**/

import 'backbone';

export default class MyModel extends Backbone.Model {

	/**
	*	@constructor
	*	@param [attrs] {Object} optional attributes
	**/
	constructor(attrs = {}) {
		super();
		this.set(attrs, { silent: true });
	}

	/**
	*	Initialize
	*	@public
	*	@override
	*	@method initialize
	*	@return model.MyModel
	**/
	initialize() {
		return super.initialize();
	}

}
