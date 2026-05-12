
let userNumber= +prompt("enter the number:" , 0);
let sum =0;

if (isNaN(userNumber)){
  alert("یک عدد وارد نمایید")
}else{
  if(userNumber=== 0){
   sum=0;
  } else {
     for(let i=0 ; userNumber/10!=0 ; i++){
      
      sum =sum + (userNumber % 10)
      userNumber =Math.floor(userNumber/10);
    }
  }
  alert("حمع ارقام:"+ sum)
}