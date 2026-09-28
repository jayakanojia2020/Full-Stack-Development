function car(brand){
    this.brand = brand;
}
car.prototype.start = function(){
console.log(this.brand, " has started");
};
const c1 = new car("BMW");
const c2 = new car("Porche");
c1.start();
c2.start();