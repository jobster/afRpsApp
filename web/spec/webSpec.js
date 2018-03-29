var chai = require('chai');
var rps = require('../RpsApp');
const ReactDOM = require("react-dom")
const React = require("react")


describe("Render something", function () {
    it("shows Hello!", function () {
        expect(ReactDOM.render(rps.testElement)).to.contain("Hello World")
    });
});