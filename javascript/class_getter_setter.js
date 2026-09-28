class Circle{
    constructor (rad){
        this.rad = rad;
    }
    get Area(){
        return (Math.PI*this.rad**2);
    }
    set radius(radius){
        this.rad = radius;
    }
}
const c1 = new Circle(2);
console.log(c1.Area);
c1.rad = 3;
console.log(c1.Area);