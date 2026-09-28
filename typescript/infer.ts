type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Result = ArrayElement<string[]>;