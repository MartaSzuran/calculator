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

    <button type='button' id='numb0'>0</button>
    <button type='button' id='floating'>,</button>
    <button type='button' id='equal'>=</button>
  </div>
`;

let listOfNumbersForCalculation = [];
let solutionDiv = document.getElementById("solution");

const calculator = document.getElementById("calculator");
let numberInString = "";

calculator.addEventListener("click", (event) => checkEventType(event));

function checkEventType(ev) {
  if (ev.target.id === "clear") {
    clear();
  }

  if (ev.target.id.includes("numb")) {
    if (!numberInString) {
      numberInString = ev.target.value;
      renderNumbers(numberInString);
      return;
    }
    numberInString += ev.target.value;
    renderNumbers(numberInString);
  }
}

function renderNumbers(numbStr) {
  solutionDiv.innerHTML = `${numbStr}`;
}

function clear() {
  numberInString = "";
  solutionDiv.innerHTML = "";
}
