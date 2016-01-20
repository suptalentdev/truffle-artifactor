"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Example = function (_Pudding) {
    _inherits(Example, _Pudding);

    function Example() {
      _classCallCheck(this, Example);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Example).apply(this, arguments));
    }

    return Example;
  }(Pudding);

  ;

  // Set up specific data for this class.
  Example.abi = [{ "constant": true, "inputs": [], "name": "getValue", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "value", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "val", "type": "uint256" }], "name": "setValue", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "val", "type": "uint256" }], "name": "parrot", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "val", "type": "uint256" }], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }], "name": "ExampleEvent", "type": "event" }];
  Example.binary = "6060604052604051602080609883395060806040525180600014156026576001600055602c565b60008190555b50605f8060396000396000f3606060405260e060020a600035046320965255811460385780633fa4f2451460465780635524107714604e578063d18dfdc9146058575b005b6000545b6060908152602090f35b603c60005481565b6004356000556036565b600435603c56";

  if ("0xb21dd320c50025e1e69ad0d91e83a19eccf7d9b2" != "") {
    Example.address = "0xb21dd320c50025e1e69ad0d91e83a19eccf7d9b2";

    // Backward compatibility; Deprecated.
    Example.deployed_address = "0xb21dd320c50025e1e69ad0d91e83a19eccf7d9b2";
  }

  Example.generated_with = "1.1.0";
  Example.contract_name = "Example";

  return Example;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined" && typeof module.exports != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Example = factory;
}