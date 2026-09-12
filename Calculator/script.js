const display = document.getElementById('display');
const buttons = document.querySelectorAll('.key');

// Loop through buttons and attach event listeners
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const value = this.getAttribute('value');
        handleInput(value);
    });
}

function handleInput(val) {
    if (val === 'C') {
        // Clear display
        display.value = '';
    } else if (val === '=') {
        // Evaluate mathematical expression safely
        if (display.value !== '') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
    } else {
        // Append clicked button value to display
        if (display.value === 'Error') {
            display.value = val;
        } else {
            display.value += val;
        }
    }
}