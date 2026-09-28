interface Student {
    name: string;
    marks: number;
}

let key: keyof Student;

key = "name";
key = "marks";

//key = "age";   // Error
