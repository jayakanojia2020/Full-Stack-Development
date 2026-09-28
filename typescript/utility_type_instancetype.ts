//Gets the instance type of a class.
class Person {
    name = "John";
}

type PersonType = InstanceType<typeof Person>;