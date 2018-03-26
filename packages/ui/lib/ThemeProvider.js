"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var defaultTheme = {
  primary: '#f00'
};

var mergedThemes = function mergedThemes(customTheme) {
  return Object.assign({}, defaultTheme, customTheme);
};

var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return React.createElement(_styledComponents.ThemeProvider, {
    theme: mergedThemes(theme)
  }, children);
};

var _default = ThemeProvider;
exports.default = _default;