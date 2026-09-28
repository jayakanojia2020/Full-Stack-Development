let value: string | number;

value = "Hello"; // ✅
console.log(value);
console.log(typeof(value));
value = 42;      // ✅
//value = true;    // ❌ Error: Type 'boolean' is not assignable
console.log(value);
console.log(typeof(value));