//referece to input number
var inputNumber = document.querySelector(".inputNumber")
//reference to multiply number
var multiplyNumber = document.querySelector(".multiplyNumber")
//reference to counter
var counter = document.querySelector(".counter")
//reference to increase button
var increaseButton = document.querySelector(".increaseButton")
//reference to decrease button
var decreaseButton = document.querySelector(".decreaseButton")
//button to update
var updateButton = document.querySelector(".updateButton")


function counterWidget(){
    var number = Number(inputNumber.value)
    var multiply = Number(multiplyNumber.value)
    if(isNaN(number) && isNaN(multiply)){
        return;
    }
    var total = number * multiply
    if(total !== 0){
        counter.innerHTML
    }
}
increaseButton.addEventListener("click", function(){
    counter.innerHTML++
    counterWidget()
});

decreaseButton.addEventListener("click", function(){
    counter.innerHTML--
    counterWidget()
});



