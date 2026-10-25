function createBalanceParenthesis(parenthesis, sizeOfParenthesis) {
  if (sizeOfParenthesis == 0) return parenthesis;

  parenthesis += "(";
  parenthesis = createBalanceParenthesis(parenthesis, sizeOfParenthesis - 1);

  parenthesis += ")";
  return parenthesis;
}

let parenth = createBalanceParenthesis("", 10);

console.log(parenth);
