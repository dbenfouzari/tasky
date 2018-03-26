"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    padding: 5px 10px;\n    font-size: 1em;\n    border: 1px solid rgba(0, 0, 0, .1);\n    \n    &:focus {\n        outline: 0;\n    }\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = function Input(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      parentClassName = _ref.parentClassName,
      className = _ref.className;
  return React.createElement("input", {
    value: value,
    onChange: function (_onChange) {
      function onChange(_x) {
        return _onChange.apply(this, arguments);
      }

      onChange.toString = function () {
        return _onChange.toString();
      };

      return onChange;
    }(function (event) {
      return onChange(event.currentTarget.value);
    }),
    className: [parentClassName, className].join(' ')
  });
};

var StyledInput = (0, _styledComponents.default)(Input)(_templateObject);

var FullInput = function FullInput(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange,
      className = _ref2.className;
  return React.createElement(StyledInput, {
    value: value,
    onChange: onChange,
    parentClassName: className
  });
};

var _default = FullInput;
exports.default = _default;