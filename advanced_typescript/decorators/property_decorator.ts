function logProperty(tagret: any, propertyKey: string){
    console.log("Property:", propertyKey)
}
class user{
    @logProperty
    name: string = "Jaya"
}
