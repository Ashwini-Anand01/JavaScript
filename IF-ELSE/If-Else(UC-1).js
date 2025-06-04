const name="Ashwini Anand"; // person name is given which will be constant
let  randomnumber=Math.floor(Math.random()*2); // random number will generated and  2 is written because only we 2 possible output either present or absent so 0,1 will give
let absent=0; // here we give absent as 0 so that conditional operation when we perform we have already assign one value so that if other value will be present
if(randomnumber==0){
    console.log("absent");
}
else{
    console.log("present");
}
