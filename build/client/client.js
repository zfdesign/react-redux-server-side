'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _App = require('./App.jsx');

var _App2 = _interopRequireDefault(_App);

var _store = require('./redux/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: (0, _store2.default)() },
  _react2.default.createElement(_App2.default, null)
), document.querySelector('#content'));