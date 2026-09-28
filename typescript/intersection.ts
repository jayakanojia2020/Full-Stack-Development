type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "Jaya",
  employeeId: 101,
};