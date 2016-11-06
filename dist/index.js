"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Patrolling = function () {
  function Patrolling(cap, timeout, flush, push) {
    (0, _classCallCheck3.default)(this, Patrolling);

    this._cap = cap;
    this._timeout = timeout;
    this._flush = flush;
    this._push = push;

    this._count = 0;
    this._timer = undefined;
  }

  (0, _createClass3.default)(Patrolling, [{
    key: "flush",
    value: function flush() {
      return _regenerator2.default.async(function flush$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regenerator2.default.awrap(this._flush());

            case 2:
              this.stopTimer();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "push",
    value: function push(history) {
      return _regenerator2.default.async(function push$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _regenerator2.default.awrap(this._push(history));

            case 2:
              this._count = _context2.sent;

              if (!(this._cap <= this._count)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 6;
              return _regenerator2.default.awrap(this.flush());

            case 6:
              this.stopTimer();

            case 7:

              if (!this._timer) {
                this.startTimer();
              }

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this = this;

      if (this._timer) {
        this.stopTimer();
      }

      this._timer = Meteor.setInterval(function _callee() {
        return _regenerator2.default.async(function _callee$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(0 < _this._count)) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return _regenerator2.default.awrap(_this.flush());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, null, _this);
      }, this._timeout);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      Meteor.clearInterval(this._timer);
      this._timer = undefined;
    }
  }]);
  return Patrolling;
}();

exports.default = Patrolling;