let userNumber = 0;
let userNumbers = [];
let sum = 0;


while (userNumber !== -1) {
    userNumber = +prompt("enter the number else enter -1");
    if (userNumber !== -1) {
        userNumbers.push(userNumber);
    }
    
}
for (let i = 0; i < userNumbers.length; i++) {
    sum=sum+userNumbers[i];
}
const avarage = sum / userNumbers.length;
alert("avarage is:"+ avarage);




