(function hello(){
    function Point(_x, _y) {
        this.getX = function () {
            return _x;
        };

        this.setX = function (x) {
            _x = x;
        };

        this.getY = function () {
            return _y;
        };

        this.setY = function (y) {
            _y = y;
        };
    }
    Point.setPoint = function(n){
        return n;
    }
    var obj = new Point(1,2);
    console.log(obj);
    console.log(Point.setPoint(1));
})();
(function hi(){
})();
