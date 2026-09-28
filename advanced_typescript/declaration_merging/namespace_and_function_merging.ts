function greet(name: string) {
    return "Hello " + name;
}

namespace greet {
    export const language = "English";
}

console.log(greet("Jaya"));
console.log(greet.language);