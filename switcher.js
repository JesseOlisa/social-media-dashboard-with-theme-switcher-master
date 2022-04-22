const switcher = document.querySelector('.switcher');
const switchControl = document.getElementById('switch-control');

switcher.addEventListener('click', ()=> {

    if(switchControl.getAttribute('href') == "" || switchControl.getAttribute('href') == './style.css') {
        switchControl.setAttribute('href', './dark_style.css');
    }
    else {
        switchControl.setAttribute('href', './style.css');
    }

});