let userNumber = +prompt ("عدد را وارد نمایید:" , 0);
let sum=0;
let count=0;

while(userNumber/10!=0){
    sum = sum + (userNumber %10);
    count++;
    userNumber=Math.floor(userNumber/10);
}
alert("sum of digit:"+ sum + "\n" + "count of digit:"+ count)