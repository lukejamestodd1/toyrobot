function Robot() {
    this.X = 0;
    this.Y = 0;
    this.F = '';

    this.REPORT = function(){
        return this.X + ',' + this.Y + ',' + this.F;
    };

    this.PLACE = function(x,y,f) {
        //make sure input is valid
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