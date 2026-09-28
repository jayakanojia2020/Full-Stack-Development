function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Done");
}

one();

/*
Call Stack

┌──────────────┐
│ Global       │
└──────────────┘

one()

┌──────────────┐
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘

two()

┌──────────────┐
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘

three()

┌──────────────┐
│ three()      │
├──────────────┤
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘

After completion:

Global
*/