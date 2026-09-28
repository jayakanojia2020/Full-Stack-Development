function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
/*
Call one()
↓
Call two()
↓
console.log()
↓
Return from console.log()
↓
Return from two()
↓
Return from one()
*/