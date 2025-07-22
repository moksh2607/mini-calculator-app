function appendToDisplay(value) {
    const display = document.getElementById('display');
    const expression = document.getElementById('expression');
    display.value += value;
    expression.innerText = display.value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('expression').innerText = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    document.getElementById('expression').innerText = display.value;
  }
  
  function calculate() {
    const expression = document.getElementById('display').value;
    try {
      const result = eval(expression);
      document.getElementById('expression').innerText = expression + ' =';
      document.getElementById('display').value = result;
    } catch (error) {
      alert('Invalid input!');
      clearDisplay();
    }
  }
  
  document.addEventListener('keydown', function (event) {
    const key = event.key;
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','(',')'];
  
    if (allowedKeys.includes(key)) {
      appendToDisplay(key);
    } else if (key === 'Enter') {
      event.preventDefault();
      calculate();
    } else if (key === 'Backspace') {
      deleteLast();
    } else if (key === 'c' || key === 'C') {
      clearDisplay();
    }
  });
  