type IsString<T> = T extends string ? "Yes" : "No";
type A = IsString<string>;   // "Yes"
type B = IsString<number>;   // "No"
type C = IsString<boolean>;  // "No"