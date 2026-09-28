function LogMethod(tagret: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    console.log("Method: ", propertyKey);
}
class Calculator{
    @LogMethod
    add(a: number, b: number){
        return a+b;
    }
}