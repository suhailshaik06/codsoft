let currentNumber = "";
let previousNumber = "";
let  operator = "";

function appendNumber(number){
  currentNumber += number;
  document.getElementById("display").value = currentNumber;

}
function appendOperator(op){
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";

}
function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";

}
function appendDecimal() {
  if (!currentNumber.includes(".")){
    currentNumber += ".";
    document.getElementById("display").value = currentNumber;

  }
}
function calculate(){
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "%":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "+/-":
      result = parseFloat(previousNumber) + - parseFloat(currentNumber);
      break; 
    case "/":
      if (currentNumber === "0") {
        alert("Error: Division by zero");
        return;
      }
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = currentNumber;
}