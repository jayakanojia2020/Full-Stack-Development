// Creates an object type with specified keys and value type.
type Employee = Record<string, number>;
const salary: Employee = {
    Rahul: 50000,
    Aman: 60000,
    Priya: 70000
};
// example 2 
type Grades = Record<"Math" | "Science", number>;
const marks: Grades = {
    Math: 95,
    Science: 90
};