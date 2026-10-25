function pathOne(startOne) {
  if (startOne == "Aurora") {
    return "Ember";
  }
  if (startOne == "Ember") {
    return "Nebula";
  }
  if (startOne == "Nebula") {
    return "Rift";
  }
  if (startOne == "Rift") {
    return "Aurora";
  }
}

function pathTwo(startTwo) {
  if (startTwo == "Ember") {
    return "Nebula";
  }
  if (startTwo == "Nebula") {
    return "Rift";
  }
  if (startTwo == "Rift") {
    return "Obsidian";
  }
  if (startTwo == "Obsidian") {
    return "Eclipse";
  }
  if (startTwo == "Eclipse") {
    return "Ember";
  }
}
let meetingGate = "";

function meet(startOne, startTwo, moves) {
  let totalMove =
    pathOne(startOne) == pathTwo(startTwo)
      ? moves
      : meet(pathOne(startOne), pathTwo(startTwo), moves + 1);
  meetingGate = pathOne(startOne);
  return totalMove;
}

const startOne = "Obsidian";
const startTwo = "Ember";
// console.log(
//   ` Spacejets Starting from ${startOne} and ${startTwo} would meet after ${meet(startOne, startTwo, 0)} move at ${meetingGate}`,
// );

console.log(
  ` Total moves : ${meet(startOne, startTwo, 0)} , Meeting Gate : ${meetingGate} `,
);
