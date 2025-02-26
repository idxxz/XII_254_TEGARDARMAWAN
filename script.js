function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;
    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteCharacter() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length - 1);
}

function appendToPercentage() {
    const display = document.getElementById('display');
    display.value = eval(display.value + "/100");
}

function getOperation(expression) {
    if (expression.includes('+')) return 'tambah';
    if (expression.includes('-')) return 'kurang';
    if (expression.includes('*')) return 'kali';
    if (expression.includes('/')) return 'bagi';
    if (expression.includes('%')) return 'persen';
    return '';
}