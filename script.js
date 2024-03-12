
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
}
document.querySelector("body").style.backgroundColor="black";
function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
