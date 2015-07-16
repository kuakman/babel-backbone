'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _libsUnderscoreUnderscoreMin = require('libs/underscore/underscore-min');

var _libsUnderscoreUnderscoreMin2 = _interopRequireDefault(_libsUnderscoreUnderscoreMin);

var _libsJqueryDistJqueryMin = require('libs/jquery/dist/jquery.min');

var _libsJqueryDistJqueryMin2 = _interopRequireDefault(_libsJqueryDistJqueryMin);

var _libsBackboneBackboneMin = require('libs/backbone/backbone-min');

var _libsBackboneBackboneMin2 = _interopRequireDefault(_libsBackboneBackboneMin);

var MyView = (function (_Backbone$View) {
	_inherits(MyView, _Backbone$View);

	function MyView(options) {
		_classCallCheck(this, MyView);

		_get(Object.getPrototypeOf(MyView.prototype), 'constructor', this).call(this, options);
	}

	_createClass(MyView, [{
		key: 'initialize',
		value: function initialize() {
			this.listenTo(this.model, 'change', this.render());
			return this;
		}
	}, {
		key: 'render',
		value: function render() {
			this.$el.html(this.model.get('prop'));
			return this;
		}
	}]);

	return MyView;
})(_libsBackboneBackboneMin2['default'].View);

var myModel = new _libsBackboneBackboneMin2['default'].Model();
myModel.set({ prop: 1 }, { silent: true });

var myView = new MyView({ el: 'div#global', model: myModel });
myView.render();

model.set({ prop: 2 });