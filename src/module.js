import _ from 'libs/underscore/underscore-min';
import $ from 'libs/jquery/dist/jquery.min';
import Backbone from 'libs/backbone/backbone-min';

class MyView extends Backbone.View {

	constructor(options) {
		super(options);
	}

	initialize() {
		this.listenTo(this.model, 'change', this.render());
		return this;
	}

	render() {
		this.$el.html(this.model.get('prop'));
		return this;
	}

}

var myModel = new Backbone.Model();
myModel.set({ prop: 1 }, { silent: true });

var myView = new MyView({ el: 'div#global', model: myModel });
myView.render();

model.set({ prop: 2 });
