enum Color {
    Red,
    Blue
}

namespace Color {
    export function print() {
        console.log("Available colors");
    }
}

Color.print();