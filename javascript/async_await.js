// example 1
async function data()
{
    return "data from file"
}
data().then(console.log);

// example 2
async function fetchData() {
    const flag = await Promise.resolve("Success");
    console.log(flag);
}
fetchData();