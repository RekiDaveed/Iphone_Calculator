let Numbers = document.querySelectorAll('#Number');
const del = document.querySelector('#clear');
let operations = document.querySelectorAll('#operator');
let result = document.querySelector('.result');
let showit = document.getElementById('ShowResult');
const decimaladd = document.querySelector('#decimal');
const percent = document.querySelector('#percentage');
const negativepositive = document.getElementById('negativeplus');
let previous = document.querySelector('.PreviousResult');

Numbers.forEach(button => {
    button.addEventListener('click', function() {
        result.value += button.innerHTML;
    });
});

del.addEventListener('click', function() {
    result.value = '';
    previous.value = '';
});

operations.forEach(button => {
    button.addEventListener('click', function() {
        if (result.value !== '') {
            const currentOperator = button.innerHTML;
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
        let expression = result.value.replace(/\s+/g, ''); 
        const evaluatedResult = math.evaluate(expression); 
        
        previous.value = `${result.value} = ${evaluatedResult}`;
        result.value = evaluatedResult;
    } catch (error) {
        console.log(`Error: ${error.message}`);

        setTimeout(() => {
            result.value = 'Error';
        }, 2000);
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
        result.value = (parseFloat(result.value) * -1).toString();
    }
});

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}
