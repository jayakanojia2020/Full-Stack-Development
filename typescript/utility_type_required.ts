//Makes every optional property required.
interface User {
    name?: string;
    age?: number;
}

type CompleteUser = Required<User>;
// the above will be quivalent to this
// type CompleteUser = {
//     name: string;
//     age: number;
// };