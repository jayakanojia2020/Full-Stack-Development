//Removes selected properties.
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}
type UserWithoutId = Omit<User, "id">;