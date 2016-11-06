"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Patrolling = function () {
  function Patrolling(cap, timeout, flush, push) {
    _classCallCheck(this, Patrolling);

    this._cap = cap;
    this._timeout = timeout;
    this._flush = flush;
    this._push = push;

    this._count = 0;
    this._timer = undefined;
  }

  _createClass(Patrolling, [{
    key: "flush",
    value: function flush() {
      return regeneratorRuntime.async(function flush$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this._flush());

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
      return regeneratorRuntime.async(function push$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(this._push(history));

            case 2:
              this._count = _context2.sent;

              if (!(this._cap <= this._count)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 6;
              return regeneratorRuntime.awrap(this.flush());

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
        return regeneratorRuntime.async(function _callee$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(0 < _this._count)) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return regeneratorRuntime.awrap(_this.flush());

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