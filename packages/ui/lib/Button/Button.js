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

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      parentClassName = _ref.parentClassName,
      className = _ref.className,
      children = _ref.children;
  return React.createElement("button", {
    onClick: onClick,
    className: [parentClassName, className].join(' ')
  }, children);
};

var StyledButton = (0, _styledComponents.default)(Button)(_templateObject);

var FullButton = function FullButton(_ref2) {
  var onClick = _ref2.onClick,
      className = _ref2.className,
      children = _ref2.children;
  return React.createElement(StyledButton, {
    onClick: onClick,
    parentClassName: className
  }, children);
};

var _default = FullButton;
exports.default = _default;