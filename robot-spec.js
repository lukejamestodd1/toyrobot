'use strict';
var expect = require('chai').expect;

describe('Robot', function() {
    var RobotFile = require('./robot.js');
    var RobotClass = RobotFile.Robot;

    it('should read the file', function() {
        expect(RobotFile).to.not.be.undefined;
    });

    var Robot1 = new RobotClass;

    it('should initialise a new robot', function() {
        expect(Robot1.X).to.equal(0);
        expect(Robot1.Y).to.equal(0);
        expect(Robot1.F).to.equal('');
        var string = Robot1.REPORT();
        expect(string).to.equal('0,0,');
    });

    it('should not place a robot with invalid input', function() {
        Robot1.PLACE(1,3,'HELLO');
        var string = Robot1.REPORT();
        expect(string).to.equal('0,0,');
        Robot1.PLACE(5,1,'EAST');
        string = Robot1.REPORT();
        expect(string).to.equal('0,0,');
        Robot1.PLACE(0,6,'EAST');
        string = Robot1.REPORT();
        expect(string).to.equal('0,0,');
    });

    it('should place a robot in position', function() {
        Robot1.PLACE(1,3,'NORTH');
        var string = Robot1.REPORT();
        expect(string).to.equal('1,3,NORTH');
    });

    

        
    
});

/*
### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH
*/