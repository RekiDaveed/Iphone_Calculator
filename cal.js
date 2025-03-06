let Numbers = document.querySelectorAll('#Number');
const del = document.querySelector('#clear');
let operations = document.querySelectorAll('#operator');
let result = document.querySelector('.result');
let showit = document.getElementById('ShowResult');
const decimaladd = document.querySelector('#decimal');
const percent = document.querySelector('#percentage');
const negativepositive = document.getElementById('negativeplus');

Numbers.forEach(button => {
    button.addEventListener('click', function() {
        result.value += button.innerHTML;
    });
});

del.addEventListener('click', function() {
    result.value = '';
});

operations.forEach(button => {
    button.addEventListener('click', function() {
        if (result.value !== '') {
            const currentOperator = button.innerHTML 
            const lastChar = result.value.slice(-1);

            if (isOperator(lastChar)) {
                result.value = result.value.slice(0, -1) + currentOperator;
            } else {
                result.value += currentOperator;
            }
        } else if (button.innerHTML === '-') {
            result.value += '-';
        } else {
            console.log('No number to operate on');
        }
    });
});

showit.addEventListener('click', function() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = '';
    }
});

decimaladd.addEventListener('click', function() {
    if (!result.value.includes('.')) {
        result.value += '.';
    }
});

percent.addEventListener('click', function() {
    if (result.value !== '') {
        result.value = parseFloat(result.value) / 100;
    }
});

negativepositive.addEventListener('click', function() {
    if (result.value !== '') {
        result.value = parseFloat(result.value) * -1;
    }
});

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}

negativepositive.addEventListener('click', function() {
    if (result.value !== '') {
        let parts = result.value.split(/([+\-*/])/);
        parts[0] = parseFloat(parts[0]) * -1;
        result.value = parts.join('');
    }
});