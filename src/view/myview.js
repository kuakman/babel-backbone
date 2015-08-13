/**
*	MyView View class
*	@class view.MyView
*	@extends Backbone.View
*
*	@requires Backbone
*	@requires partials.mytemplate
**/

import Backbone from 'backbone';
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
		this.parent.$el.append(this.el);
		this.$el.html(this.template({ value: this.model.value, rows: this.model.rows }));
		return this;
	}

	/**
	*	Item Click Handler
	*	@public
	*	@method onItemClick
	*	@param e {Object} event reference
	*	@return view.MyView
	**/
	onItemClick(e) {
		this.$el.children().css({
			'background-color': 'transparent',
			'color': 'black'
		});
		$(e.currentTarget).css({
			'background-color': 'blue',
			'color': 'white'
		});
		return this;
	}

	/**
	*	Retrieves backbone events used by this view
	*	@public
	*	@override
	*	@method className
	*	@return String
	**/
	get events() {
		return { 'click li.row': 'onItemClick' };
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
		return 'ul';
	}

	/**
	*	Retrieves the classes used by this view.
	*	@public
	*	@override
	*	@method className
	*	@return String
	**/
	get className() {
		return 'list';
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
