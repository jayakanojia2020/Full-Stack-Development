// Makes every property read-only.
interface User {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "John",
    age: 25
};
//user.name = "Mike"; // Error