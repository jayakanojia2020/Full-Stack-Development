//Removes null and undefined.
type Data = string | null | undefined;

type CleanData = NonNullable<Data>; // cleanData will have only string
