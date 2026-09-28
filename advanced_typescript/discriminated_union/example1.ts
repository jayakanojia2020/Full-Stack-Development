type circle = {
    kind: "circle",
    radius: number
};
type Sqaure = {
    kind: "square",
    side: number
}
type Rectangle = {
    kind: "rectangle",
    width: number,
    height: number
}
type Shape = circle | Sqaure | Rectangle;

function area (shape: Shape): number {
    switch(shape.kind){
        case "circle": return Math.PI * shape.radius;
        case "square": return shape.side * shape.side;
        case "rectangle": return shape.width * shape.height;
        default: return 0;
    }
}
const c: Shape = {
    kind: "circle",
    radius: 3
}
console.log(area(c));