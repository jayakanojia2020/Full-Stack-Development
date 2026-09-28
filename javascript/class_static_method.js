class MathUtils{
    static square(num){
        return num*num;
    }
}
console.log(MathUtils.square(4));

// Type error
const obj = new MathUtils();
obj.square(4);