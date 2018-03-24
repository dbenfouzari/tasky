"use strict";

var React = _interopRequireWildcard(require("react"));

var Enzyme = _interopRequireWildcard(require("enzyme"));

var Adapter = _interopRequireWildcard(require("enzyme-adapter-react-16"));

var _ = require("./");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

Enzyme.configure({
  adapter: new Adapter()
});
describe('Truc', function () {
  it('should be truc', function () {
    var wrapper = (0, Enzyme.shallow)(React.createElement(_.Input, {
      value: "2",
      onChange: function onChange() {
        return null;
      }
    }));
    expect(wrapper).toHaveLength(1);
  });
});