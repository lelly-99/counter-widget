//referece to add multiple
var multiplyButton = document.querySelector(".multiplyButton")
//reference to multiply number
var multiplyNumber = document.querySelector(".multiplyNumber")
//reference to counter
var counter = document.querySelector(".counter")
//reference to increase button
var increaseButton = document.querySelector(".increaseButton")
//reference to decrease button
var decreaseButton = document.querySelector(".decreaseButton")
//button to reset
var resetButton = document.querySelector(".resetButton")


//event listener to increment
increaseButton.addEventListener("click", function(){
    counter.innerHTML++
});
//event listener to decrement
decreaseButton.addEventListener("click", function(){
    counter.innerHTML--
    //counter can never be less than zero
    if (counter.innerHTML < 0) {
        counter.innerHTML = 0;
      }
});
//event listener to multiply
multiplyButton.addEventListener("click", function(){
    const multiple = Number(multiplyNumber.value);
    counter.innerHTML *= multiple
});
//event listener to reset to zero
resetButton.addEventListener("click", () => {
    inputNumber = 0;
    multiplyNumber.value = "";
    counter.innerHTML = 0;
  });


