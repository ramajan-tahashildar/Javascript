// ///++++++++++++++++++ examle for globle scope 
// let name ='ramazan'
// if(true){
//     let name = "heena"
//     // console.log(name);  // heena is decleard in block scope so it is printing
    
// }
// console.log(name);    //name: ramazan is decleard in globale so its printing


///// scope within scope 


// function one(){
//     const user = "ramazan"
//     function two(){
//         const website="Youtube"
//         console.log(user);
//     }
//     // console.log(website);
//     two()
// }
// one()

////+++++++++++++++++++++++++++++++++++++++++++++++++

// if(true){
//     const user_name= "Ramazan"
//     if(user_name==="Ramazan"){
//        const password =" 123456"        
//        console.log(`user ${user_name} is logged in and password is ${password}`);
//     }
//     // console.log(password);
// }
// //  console.log(user_name);
 

///+++++++++++++++++++++++++++++++++++++ Hoisting concept

// console.log(add(20))

// console.log(add_one(99));     // u can call funtion before the function block or after the  function block
function add_one(num){
    return num +1
}
// console.log(add_one(99));
 


// // console.log(add(855));      // you Cannot access 'add' before initialization whene you store the function in varibale
// const add = function add_two(num2){
//     return num2 + 2
// }

// console.log(add(45435));
