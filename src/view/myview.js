/**
*	MyView View class
*	@class view.MyView
*	@extends Backbone.View
*
*	@requires Backbone
*	@requires partials.mytemplate
**/

import 'backbone';
import MyViewHTML from 'text!mytemplate.html';

export default class MyView extends Backbone.View {

	/**
	*	@constructor
	*	@param [attrs] {Object} optiional attributes
	**/
	constructor(attrs = {}) {
		super(attrs);
		if(attrs.parent) { this._parent = attrs.parent; }
	}

	/**
	*	Initialize
	*	@public
	*	@override
	*	@method initialize
	*	@return view.MyView
	**/
	initialize() {
		this.listenTo(this.model, 'change', this.render);
		return this;
	}

	/**
	*	Render
	*	@public
	*	@override
	*	@method initialize
	*	@return view.MyView
	**/
	render() {
		super.render();
		this.setElement(this.parent.$el.append(this.el));
		this.$el.html(this.template({ value: this.model.get('value') }));
		return this;
	}

	/**
	*	Retrieves compiled template used by this view.
	*	@public
	*	@method template
	*	@return Function
	**/
	get template() {
		return _.template(MyViewHTML);
	}

	/**
	*	Retrieves the tagname elements used by this view.
	*	@public
	*	@override
	*	@method tagName
	*	@return String
	**/
	get tagName() {
		return 'div';
	}

	/**
	*	Retrieves Parent View
	*	@public
	*	@method parent
	*	@return Backbone.View
	**/
	get parent() {
		return this._parent;
	}

}
