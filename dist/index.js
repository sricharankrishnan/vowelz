"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Vowelz = /*#__PURE__*/function () {
  function Vowelz() {
    _classCallCheck(this, Vowelz);
  }
  _createClass(Vowelz, [{
    key: "checkIfPropIsString",
    value: /* incoming arg validator - must be string only */
    function checkIfPropIsString(arg) {
      if (typeof arg !== "string") {
        return false;
      }
      return true;
    }

    /* sets all vowels to lower case */
  }, {
    key: "setAllVowelsToLowerCase",
    value: function setAllVowelsToLowerCase(arg) {
      var $this = this;
      if (!$this.checkIfPropIsString(arg)) {
        throw new Error("Needed argument to be of type string but is not: ".concat(arg));
        return;
      }
      return arg.replace(/[aeiou]/gi, function (match) {
        return match.toLowerCase();
      });
    }

    /* sets all vowels to upper case */
  }, {
    key: "setAllVowelsToUppercase",
    value: function setAllVowelsToUppercase(arg) {
      var $this = this;
      if (!$this.checkIfPropIsString(arg)) {
        throw new Error("Needed argument to be of type string but is not: ".concat(arg));
        return;
      }
      return arg.replace(/[aeiou]/gi, function (match) {
        return match.toUpperCase();
      });
    }

    /* get how many vowels are there in a string value */
  }, {
    key: "getCount",
    value: function getCount(arg) {
      var $this = this;
      if (!$this.checkIfPropIsString(arg)) {
        throw new Error("Needed argument to be of type string but is not: ".concat(arg));
        return;
      }
      var matches = arg.match(/[aeiou]/gi);
      return matches ? matches.length : 0;
    }

    /* get the positions of the vowels in the string */
  }, {
    key: "getPositionsOfVowels",
    value: function getPositionsOfVowels(arg) {
      var $this = this;
      if (!$this.checkIfPropIsString(arg)) {
        throw new Error("Needed argument to be of type string but is not: ".concat(arg));
        return;
      }
      var positions = [];
      arg.replace(/[aeiou]/gi, function (match, index) {
        positions.push(index);
      });
      return positions;
    }

    /* get all the vowels from a string */
  }, {
    key: "extractAllVowelsFromString",
    value: function extractAllVowelsFromString(arg) {
      var $this = this;
      if (!$this.checkIfPropIsString(arg)) {
        throw new Error("Needed argument to be of type string but is not: ".concat(arg));
        return;
      }
      return arg.match(/[aeiou]/gi) || [];
    }

    /* gets the count of all unique vowels in a string */
  }, {
    key: "getCountOfUniqueVowels",
    value: function getCountOfUniqueVowels(arg) {
      var $this = this;
      if (!$this.checkIfPropIsString(arg)) {
        throw new Error("Needed argument to be of type string but is not: ".concat(arg));
        return;
      }
      var uniqueVowels = new Set(arg.match(/[aeiou]/gi));
      return uniqueVowels.size;
    }

    /* removes all the vowels in a string */
  }, {
    key: "removeAllVowelsFromString",
    value: function removeAllVowelsFromString(arg) {
      var $this = this;
      if (!$this.checkIfPropIsString(arg)) {
        throw new Error("Needed argument to be of type string but is not: ".concat(arg));
        return;
      }
      return arg.replace(/[aeiou]/gi, '');
    }
  }]);
  return Vowelz;
}();
var _default = exports["default"] = Vowelz;