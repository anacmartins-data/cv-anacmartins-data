var buttons = document.querySelectorAll('.accordion-button');
var contents = document.querySelectorAll('.accordion-content');

buttons.forEach(function(button, index) {
    button.addEventListener('click', function () {
        if (contents[index].style.display === 'block') {
            contents[index].style.display = 'none';
        } else {
            contents[index].style.display = 'block';
        }
    });
});
