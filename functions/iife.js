
// Immediately invoked the function expression  

/// IIFE with normal  function
(function  iife(name){
 console.log(`Welcome to IIFE world ${name}`);
})("Ramazan");

//IIFE with arrow function

((num1,num2)=>{
    console.log(num1+num2);
    return
})(10,20);
