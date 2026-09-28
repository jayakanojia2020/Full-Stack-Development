type User = {
    role: "admin" | "user" | "guest";
};

const person: User = {
    role: "admin"
};

person.role = "guest";   // ✅
//aperson.role = "owner";   // ❌