import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class='calculator' id='calculator'>
    <div type='number' id='solution'></div>
    <button type='button' id='clear'>C</button>
    <button type='button' id='pos-neg'>+/-</button>
    <button type='button' id='percent'>%</button>
    <button type='button' id='division'>÷</button>

    <button type='button' id='numb7' value='7'>7</button>
    <button type='button' id='numb8' value='8'>8</button>
    <button type='button' id='numb9' value='9'>9</button>
    <button type='button' id='multiply'>x</button>

    <button type='button' id='numb4' value='4'>4</button>
    <button type='button' id='numb5' value='5'>5</button>
    <button type='button' id='numb6' value='6'>6</button>
    <button type='button' id='minus'>-</button>

    <button type='button' id='numb1' value='1'>1</button>
    <button type='button' id='numb2' value='2'>2</button>
    <button type='button' id='numb3' value='3'>3</button>
    <button type='button' id='plus'>+</button>

    <button type='button' id='numb0' value='0'>0</button>
    <button type='button' id='floating' value=','>,</button>
    <button type='button' id='equal'>=</button>
  </div>
`;

let calculateNumber = "";
let listOfOperations = [];
let solutionDiv = document.getElementById("solution");

const calculator = document.getElementById("calculator");
let numberInString = "";

calculator.addEventListener("click", (event) => checkEventType(event));

function checkEventType(ev) {
  if (ev.target.id === "clear") {
    solutionDiv.innerHTML = "";
    clear();
  }

  if (ev.target.id.includes("numb") || ev.target.id === "floating") {
    if (!numberInString) {
      numberInString = ev.target.value;
      renderNumbers(numberInString);
      return;
    }
    if (numberInString.includes(",")) {
      if (ev.target.id === "floating") {
        return;
      }
    }
    numberInString += ev.target.value;
    renderNumbers(numberInString);
  }

  if (ev.target.id === "plus") {
    if (!calculateNumber) {
      listOfOperations.push("+");
      calculateNumber = Number(numberInString);
      renderNumbers(calculateNumber);
      clear();
      return;
    }
    sumNumbers();
  }

  if (ev.target.id === "equal") {
    if (listOfOperations) {
      if (listOfOperations.at(-1) === "+") {
        sumNumbers();
      }
    }
  }
}

function renderNumbers(numbStr) {
  solutionDiv.innerHTML = `${numbStr}`;
}

function clear() {
  numberInString = "";
}

function sumNumbers() {
  calculateNumber += Number(numberInString);
  renderNumbers(calculateNumber);
  listOfOperations.push("+");
  clear();
  return;
}
