const Numbers = document.querySelectorAll('#Number');

Numbers.forEach(button => { 
    button.addEventListener('click', function() {
        const result = document.querySelector('.result');
        result.value += button.innerHTML;
    });
});