const Numbers = document.querySelectorAll('#Number');
const del = document.querySelector('#clear');
const operations = document.querySelectorAll('#operator');
const result = document.querySelector('.result');
const equal = document.querySelector('#showResult');
const decimaladd = document.querySelector('#decimal');
const percent = document.querySelector('#percentage');
const negativepositive = document.querySelector('#negative');

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
            const lastChar = result.value.slice(-1); 
            const currentOperator = button.innerHTML === 'X' ? '*' : button.innerHTML; 

            if (isOperator(lastChar)) {
                result.value = result.value.slice(0, -1) + currentOperator;
            } else {
                result.value += currentOperator;
            }
        } else {
            console.log('No number to operate on');
        }
    });
});

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}
