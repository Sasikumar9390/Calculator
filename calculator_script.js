document.addEventListener('DOMContentLoaded', function() {
    var display = document.querySelector('input[name="display"]');
    var buttons = document.querySelectorAll('input[type="button"]');
    var expression = '';
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const value = this.value;
            if (value === 'AC') {
                expression = '';
            } else if (value === 'DE') {
                expression = expression.slice(0, -1);
            } else if (value === '=') {
                try {
                    expression = eval(expression).toString();
                } catch (e) {
                    expression = 'Error';
                }
            } else {
                expression += value;
            }
            display.value = expression;
        });
    });
});
