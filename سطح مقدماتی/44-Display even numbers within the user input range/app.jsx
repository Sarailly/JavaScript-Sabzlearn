let firstNumber=+prompt("please enter fist number:");
let secondNumber=+prompt("please enter fist number:");

let minNumber=Math.min(firstNumber, secondNumber);
let maxNumber=Math.max(firstNumber, secondNumber);

if(minNumber % 2 == 0 ){
    while(minNumber<maxNumber){
        console.log(minNumber);
        minNumber=minNumber + 2;
    }
}else {
    minNumber++
     while(minNumber<maxNumber){
        console.log(minNumber);
        minNumber=minNumber + 2;
    }
}