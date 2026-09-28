enum Direction {
  North,
  South,
  East,
  West
}

let move = Direction.North;

console.log(move);

// javascript doesnt have enum so have to run the ts directly
// npx tsc app.ts --ignoreConfig
// node app.js