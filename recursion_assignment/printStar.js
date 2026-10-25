function starInLine(numberOfStars) {
  if (numberOfStars == 0) return "\n";
  return "*" + starInLine(numberOfStars - 1);
}
function generateStar(noOfRows, currentRow, star, indicator) {
  star += starInLine(currentRow);

  if (noOfRows == currentRow) indicator = true;
  if (currentRow > 0 && indicator == true)
    star = generateStar(noOfRows, currentRow - 1, star, indicator);
  else if (currentRow > 0)
    star = generateStar(noOfRows, currentRow + 1, star, indicator);

  return star;
}

console.log(generateStar(4, 1, "", false));
