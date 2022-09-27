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
    <button type='button' id='floating' value='.'>.</button>
    <button type='button' id='equal'>=</button>
  </div>
`;

let solution = 0;
let listOfOperations = [];
let solutionDiv = document.getElementById("solution");

const calculator = document.getElementById("calculator");
let numberInString = "";

calculator.addEventListener("click", (event) => checkEventType(event));

if (solution === 0) {
  renderNumbers(solution);
}

function checkEventType(ev) {
  if (ev.target.id === "clear") {
    clear();
    return;
  }

  if (ev.target.id === "pos-neg") {
    let arrOfNumb = numberInString.split("");
    if (!numberInString) {
      return;
    }
    if (arrOfNumb[0] === "-") {
      arrOfNumb.shift();
      arrOfNumb = arrOfNumb.join("");
      numberInString = arrOfNumb.toString();
      renderNumbers(numberInString);
      return;
    }
    arrOfNumb.unshift("-");
    arrOfNumb = arrOfNumb.join("");
    numberInString = arrOfNumb.toString();
    renderNumbers(numberInString);
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
    listOfOperations.push("+");
    sumNumbers();
  }

  if (ev.target.id === "minus") {
    listOfOperations.push("-");
    subtractionNumbers();
  }

  if (ev.target.id === "multiply") {
    listOfOperations.push("x");
    multiplyNumbers();
  }

  if (ev.target.id === "division") {
    listOfOperations.push("/");
    divideNumbers();
  }

  if (ev.target.id === "equal") {
    if (listOfOperations) {
      if (listOfOperations.at(-1) === "+") {
        listOfOperations = [];
        sumNumbers();
      }
      if (listOfOperations.at(-1) === "-") {
        listOfOperations = [];
        subtractionNumbers();
      }
      if (listOfOperations.at(-1) === "x") {
        listOfOperations = [];
        multiplyNumbers();
      }
      if (listOfOperations.at(-1) === "/") {
        listOfOperations = [];
        divideNumbers();
      }
    }
  }
}

function renderNumbers(numbStr) {
  solutionDiv.innerHTML = `${numbStr}`;
}

function clear() {
  numberInString = "";
  listOfOperations = [];
  solution = 0;
  renderNumbers(solution);
}

function sumNumbers() {
  if (!numberInString) {
    renderNumbers(solution);
    return;
  }

  if (listOfOperations.at(-2)) {
    listOfOperations.shift();
    chooseOperation(listOfOperations.at(-2));
  }

  if (numberInString) {
    if (!solution) {
      solution = Number(Number.parseFloat(numberInString));
      renderNumbers(solution);
      numberInString = "";
      return;
    }
    solution += Number(Number.parseFloat(numberInString));
    renderNumbers(solution);
    numberInString = "";
    return;
  }
}

function subtractionNumbers() {
  if (!numberInString) {
    renderNumbers(solution);
    return;
  }

  if (listOfOperations.at(-2)) {
    listOfOperations.shift();
    chooseOperation(listOfOperations.at(-2));
  }

  if (numberInString) {
    if (!solution) {
      solution = Number(Number.parseFloat(numberInString));
      renderNumbers(solution);
      numberInString = "";
      return;
    }

    solution -= Number(Number.parseFloat(numberInString));
    renderNumbers(solution);
    numberInString = "";
  }
}

function multiplyNumbers() {
  if (!numberInString) {
    renderNumbers(solution);
    return;
  }

  if (listOfOperations.at(-2)) {
    listOfOperations.shift();
    chooseOperation(listOfOperations.at(-2));
  }

  if (numberInString) {
    if (!solution) {
      solution = Number(Number.parseFloat(numberInString));
      renderNumbers(solution);
      numberInString = "";
      return;
    }

    solution *= Number(Number.parseFloat(numberInString));
    renderNumbers(solution);
    numberInString = "";
  }
}

function divideNumbers() {
  if (!numberInString) {
    renderNumbers(solution);
    return;
  }

  if (listOfOperations.at(-2)) {
    listOfOperations.shift();
    chooseOperation(listOfOperations.at(-2));
  }

  if (numberInString) {
    if (!solution) {
      solution = Number(Number.parseFloat(numberInString));
      renderNumbers(solution);
      numberInString = "";
      return;
    }

    solution = solution / Number(Number.parseFloat(numberInString));
    renderNumbers(solution);
    numberInString = "";
  }
}

function chooseOperation(previousOperation) {
  if (previousOperation === "+") {
    sumNumbers();
  }
  if (previousOperation === "+") {
    subtractionNumbers();
  }
  if (previousOperation === "+") {
    multiplyNumbers();
  }
  if (previousOperation === "+") {
    divideNumbers();
  }
}
