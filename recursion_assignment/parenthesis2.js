function createParenthesis(sizeOfParenthesis) {
  if (sizeOfParenthesis == 0) return "";
  return "(" + createParenthesis(sizeOfParenthesis - 1) + ")";
}
console.log(createParenthesis(5));
