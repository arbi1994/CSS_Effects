const input = document.querySelector('input');
const label = document.querySelectorAll('label');
const loginBox = document.querySelector('.login-box');

document.addEventListener('click', () => {
    if(input.value){
        input.style.color = "transparent";
    }
});

input.addEventListener('input', () => {
    const transparent = input.style.color = 'white';
    if(transparent){
        input.style.color = 'white';
    }
});

