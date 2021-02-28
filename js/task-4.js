const decrementBtnRef = document.querySelector('button[data-action = "decrement"]');
const incrementBtnRef = document.querySelector('button[data-action = "increment"]');
const spanRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', OnDecrementBtnClick);
incrementBtnRef.addEventListener('click', OnIncrementBtnClick);

let counterValue = 0;


function OnDecrementBtnClick() {
    counterValue -= 1;
    spanRef.textContent = counterValue;
     
};

function OnIncrementBtnClick() {
    counterValue += 1; 
    spanRef.textContent = counterValue;
   
};