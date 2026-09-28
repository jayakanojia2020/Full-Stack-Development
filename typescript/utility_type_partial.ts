interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUser = Partial<User>;
// above is equivalent to below one
// type UpdateUser = {
//   id?: number;
//   name?: string;
//   email?: string;
// };
function updateUser(user: Partial<User>) {
    console.log(user.email);
}

updateUser({
    email: "abc@gmail.com"
});
