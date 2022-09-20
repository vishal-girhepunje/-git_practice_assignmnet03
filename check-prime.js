let num = 19;
function check_prime(num){
let count = 0;
for(let i=1;i<=num;i++){
 if(num%i==0){
  count++;
}
}
if(count==0){
 return true;
}else{
 return false 
}
}
let result = check_prime(num)
if(result==true){
console.log(num,"is prime")
}else {
console.log(num,"is not prime")
}