const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput);

function onInput(e) {
    e.currentTarget.value === '' ? spanRef.textContent = 'незнакомец' : spanRef.textContent = e.currentTarget.value;
};


// function onInput(e) {
//     if (e.currentTarget.value === '') {
//         spanRef.textContent = 'незнакомец'
//     } else {
//         spanRef.textContent = e.currentTarget.value;
//     }

// };


