"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Swipe = _interopRequireDefault(require("../Swipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Swipe renders correctly and matches snapshot', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Swipe.default, {
    elementId: "react-swipe-1",
    navigation: false
  }, _react.default.createElement("li", null, _react.default.createElement("p", null, "swiping...")), _react.default.createElement("li", null, _react.default.createElement("p", null, "more swiping...")), _react.default.createElement("li", null, _react.default.createElement("p", null, "more more swiping..."))));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Swipe renders the correct elements', function () {
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Swipe.default, {
    elementId: "react-swipe-2",
    navigation: true
  }, _react.default.createElement("li", null, _react.default.createElement("p", null, "swiping...")), _react.default.createElement("li", null, _react.default.createElement("p", null, "more swiping...")), _react.default.createElement("li", null, _react.default.createElement("p", null, "more more swiping..."))));
  expect(wrapper.find('.react-swipe').length).toEqual(1);
  expect(wrapper.find('.swipr_slides').length).toEqual(1);
  expect(wrapper.find('#react-swipe-2').length).toEqual(1);
  expect(wrapper.find('li').length).toEqual(3);
  expect(wrapper.find('p').first().text()).toEqual('swiping...');
  expect(wrapper.find('svg').length).toEqual(2);
  expect(wrapper.find('.swipr_next').length).toEqual(1);
  expect(wrapper.find('.swipr_prev').length).toEqual(1);
  wrapper.setProps({
    navigation: false
  });
  expect(wrapper.find('svg').length).toEqual(0);
  expect(wrapper.find('.swipr_next').length).toEqual(0);
  expect(wrapper.find('.swipr_prev').length).toEqual(0);
});