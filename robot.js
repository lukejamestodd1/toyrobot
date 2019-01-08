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

    this.MOVE = function(){

    };

    this.LEFT = function(){

    };

    this.RIGHT = function(){

    };


}

module.exports = {
    Robot: Robot
}