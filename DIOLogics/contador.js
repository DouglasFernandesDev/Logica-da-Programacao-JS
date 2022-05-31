var currentNumber = 0;
var currentNumberWrapper = document.getElementById('currentNumber');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

plus.addEventListener("click", () => {
  currentNumber = currentNumber + 1;
  if (currentNumber <= 10){
    currentNumberWrapper.innerHTML = currentNumber;
}
  if (currentNumber >= 0) {
    currentNumberWrapper.classList.remove ("redcolor");
  };
})

minus.addEventListener("click", () => {
    currentNumber = currentNumber - 1;
    if (currentNumber >= -10) {
      currentNumberWrapper.innerHTML = currentNumber;
  } 
    if (currentNumber < 0) {
      currentNumberWrapper.classList.add("redcolor");
    };
})