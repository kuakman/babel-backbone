/**
*	MyModel Model class
*	@class model.MyModel
*	@extends Backbone.Model
*
*	@requires Backbone
**/

import Backbone from 'backbone';

export default class MyModel extends Backbone.Model {

	/**
	*	@constructor
	*	@param [attrs] {Object} optional attributes
	**/
	constructor(attrs = { value: "Hello ES6!" }) {
		super(attrs);
		return this;
	}

	/**
	*	Retrieves property value of this model
	*	@public
	*	@method rows
	*	@return Array
	**/
	get value() {
		return this.get('value');
	}

	/**
	*	Retrieves a json representation of property rows
	*	@public
	*	@method rows
	*	@return Array
	**/
	get rows() {
		return this.get('rows').toJSON();
	}

	/**
	*	Initialize
	*	@public
	*	@override
	*	@method initialize
	*	@param [attrs] {Object} optional attributes
	*	@return model.MyModel
	**/
	initialize(attrs = {}) {
		super.initialize();
		return this.set(_.extend(attrs, {
			rows: new Backbone.Collection([{ value: 1 }, { value: 2 }, { value: 3 }])
		}), { silent: true });
	}

}
