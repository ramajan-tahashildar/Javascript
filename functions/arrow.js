
//////+++++++++++++++++++++++++ Normal function
// function print_name(name){
//     console.log(`user name is ${name}`);
// }
// print_name("Ramazan")


// //// Arrow function

// const name = (fun_name) => {
//     return`user using ${fun_name} function`
// }

// console.log(name("aroow"));


///+++++++++++++++Ex for arrow function

// const add = (...num)=> {
//     if (num%2==!0) {
//        console.error ("enter valid number")
//        return 
//     }
//   return sum (...num)
// }

// console.log(add(10,23,10));


const adder = (num1, num2)=> {
    if (num1%2==!0) {
               console.error ("enter valid number")
               return 
            }
          return num1+num2
}
console.log(adder(1250,5));
