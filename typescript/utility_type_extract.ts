//Keeps only matching members.
type Colors = "Red" | "Blue" | "Green";
type Primary = Extract<Colors, "Red" | "Blue">;