//Gets the resolved value of a Promise.
type Result = Awaited<Promise<string>>;
// example
async function fetchData() {
    return "Hello";
}

type Data = Awaited<ReturnType<typeof fetchData>>;