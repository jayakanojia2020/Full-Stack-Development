//Removes members from a union.
type Colors = "Red" | "Blue" | "Green";

type NewColors = Exclude<Colors, "Blue">;