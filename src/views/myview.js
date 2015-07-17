import 'backbone';

export default class MyView extends Backbone.View {

	constructor(options) {
		super(options);
	}

	initialize() {
		this.listenTo(this.model, 'change', this.render);
		return this;
	}

	render() {
		this.$el.html(this.model.get('prop'));
		return this;
	}

}
