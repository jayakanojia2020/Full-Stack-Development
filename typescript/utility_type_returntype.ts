function getUser() {
    return {
        name: "John",
        age: 25
    };
}

type User = ReturnType<typeof getUser>; 
// user wlll look like this
// type User = {
//     name: string;
//     age: number;
// };