function Robot() {
    //X & Y coordinates and direction the robot is facing (F)
    this.X = 0;
    this.Y = 0;
    this.F = '';

    //show coordinates and direction
    this.REPORT = function(){
        return this.X + ',' + this.Y + ',' + this.F;
    };

    //place a robot on the board
    this.PLACE = function(x,y,f) {
        //make sure input is valid - x & y between 0 & 4, f must be valid string
        if(x >= 0 && x <= 4) {
            if(y >= 0 && y <= 4) {
                if(f == 'NORTH' || f == 'SOUTH' || f == 'EAST' || f == 'WEST') {
                    this.X = x;
                    this.Y = y;
                    this.F = f;
                }
            } 
        }    
    };

    //turn robot 90 degrees to the left
    this.LEFT = function(){
        switch(this.F){
            case 'NORTH':
                this.F = 'WEST';
                break;
            case 'EAST':
                this.F = 'NORTH';
                break;
            case 'SOUTH':
                this.F = 'EAST';
                break;
            case 'WEST':
                this.F = 'SOUTH';
                break;
        }
    };

    //turn robot 90 degrees to the right
    this.RIGHT = function(){
        switch(this.F){
            case 'NORTH':
                this.F = 'EAST';
                break;
            case 'EAST':
                this.F = 'SOUTH';
                break;
            case 'SOUTH':
                this.F = 'WEST';
                break;
            case 'WEST':
                this.F = 'NORTH';
                break;
        }
    };

    //move the robot forward 1 place
    this.MOVE = function(){
        switch(this.F){
            case 'NORTH':
                if(this.Y < 4){
                    this.Y += 1;
                } 
                break;
            case 'EAST':
                if(this.X < 4){
                    this.X += 1;
                }
                break;
            case 'SOUTH':
                if(this.Y > 0){
                    this.Y -= 1;
                }
                break;
            case 'WEST':
                if(this.X > 0){
                    this.X -= 1;
                }
                break;
        }
    };
}

module.exports = {
    Robot: Robot
}