"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var styled_components_1 = require("styled-components");
var Input = function (_a) {
    var value = _a.value, onChange = _a.onChange, parentClassName = _a.parentClassName, className = _a.className;
    return (React.createElement("input", { value: value, onChange: onChange, className: [parentClassName, className].join(' ') }));
};
var StyledInput = styled_components_1["default"](Input)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 5px 10px;\n    font-size: 1em;\n    border: 1px solid rgba(0, 0, 0, .1);\n    \n    &:focus {\n        outline: 0;\n    }\n"], ["\n    padding: 5px 10px;\n    font-size: 1em;\n    border: 1px solid rgba(0, 0, 0, .1);\n    \n    &:focus {\n        outline: 0;\n    }\n"])));
var FullInput = function (_a) {
    var value = _a.value, onChange = _a.onChange, className = _a.className;
    return (React.createElement(StyledInput, { value: value, onChange: onChange, parentClassName: className }));
};
exports["default"] = FullInput;
var templateObject_1;
