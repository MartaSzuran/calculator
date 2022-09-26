import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class='calculator' id='calculator'>
    <input type='number' id='solution'></input>
    <div id='row'>
      <button type='submit' id='clear'>C</button>
      <button type='submit' id='pos-neg'>+/-</button>
      <button type='submit' id='percent'>%</button>
      <button type='submit' id='division'>÷</button>
    </div>
    <div id='row'>
      <button type='submit' id='numb7'>7</button>
      <button type='submit' id='numb8'>8</button>
      <button type='submit' id='numb9'>9</button>
      <button type='submit' id='multiply'>x</button>
    </div>
    <div id='row'>
      <button type='submit' id='numb4'>4</button>
      <button type='submit' id='numb5'>5</button>
      <button type='submit' id='numb6'>6</button>
      <button type='submit' id='minus'>-</button>
    </div>
    <div id='row'>
      <button type='submit' id='numb1'>1</button>
      <button type='submit' id='numb2'>2</button>
      <button type='submit' id='numb3'>3</button>
      <button type='submit' id='plus'>+</button>
    </div>
    <div id='row'>
      <button type='submit' id='numb0'>0</button>
      <button type='submit' id='floating-number'>,</button>
      <button type='submit' id='equal'>=</button>
    </div>
  </div>
`;
