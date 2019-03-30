"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _swipr = _interopRequireDefault(require("swipr"));

var _swipe = _interopRequireDefault(require("./swipe.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * React Swipe component
 **/
var Swipe =
/*#__PURE__*/
function (_Component) {
  _inherits(Swipe, _Component);

  function Swipe() {
    _classCallCheck(this, Swipe);

    return _possibleConstructorReturn(this, _getPrototypeOf(Swipe).apply(this, arguments));
  }

  _createClass(Swipe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elementId = this.props.elementId;
      document.addEventListener('DOMContentLoaded', function () {
        var $elem = document.getElementById(elementId);
        (0, _swipr.default)($elem);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          navigation = _this$props.navigation,
          elementId = _this$props.elementId;
      return _react.default.createElement("div", {
        className: "react-swipe",
        id: elementId
      }, _react.default.createElement("div", {
        className: "swipr"
      }, _react.default.createElement("ul", {
        className: "swipr_slides"
      }, this.props.children)), navigation && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
        className: "swipr_prev"
      }, _react.default.createElement("svg", {
        width: "50",
        height: "50",
        viewBox: "0 0 501.5 501.5"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        fill: "currentColor",
        d: "M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"
      })))), _react.default.createElement("span", {
        className: "swipr_next"
      }, _react.default.createElement("svg", {
        width: "50",
        height: "50",
        viewBox: "0 0 501.5 501.5"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        fill: "currentColor",
        d: "M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"
      }))))));
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        elementId: _propTypes.default.string.isRequired,
        navigation: _propTypes.default.bool
      };
    }
  }]);

  return Swipe;
}(_react.Component);

exports.default = Swipe;