//Creates a type with only selected properties.
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

type BasicUser = Pick<User, "name" | "email">;
// equivalent to below one
// type BasicUser = {
//     name: string;
//     email: string;
// };

// real life example : Displaying only public profile