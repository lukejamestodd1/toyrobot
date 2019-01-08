'use strict';
var expect = require('chai').expect;

describe('Robot', function() {
    it('should exist', function() {
        var RobotClass = require('./robot.js');
        expect(RobotClass).to.not.be.undefined;
    });
});