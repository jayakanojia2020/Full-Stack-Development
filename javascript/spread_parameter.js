const arr1 = [1,2];
const arr2 = [...arr1, 3,4];
console.log(arr2);


const user = {
    name = "jaya"
}
const updateUser = {
    ...user,
    age: 32
}