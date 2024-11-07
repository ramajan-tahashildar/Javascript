// const score = "home"

// switch (score) {
//     case 70 :
//         console.log("FcD");
//         break;
//     case "home":
//         console.log("Distinction");
//         break;
//     case 90:
//         console.log("Best stuent");
//         break;
//     case 98:
//         console.log("Top of the Class");
//         break;
//     default:
//         console.log("fail");
//         break;
// }

// if u remove the break statement then it will exceute all the case without matching expect default



//++++++++ falsy value
//  false, 0 ,-0 , BigInt , "" , null, undefined ,NaN


 //++++++ truthy values
//  "0" , 'false', ' ', [], {}, function(){}




///////////++++++++++++ ?? use case : when u get null or undefined values from backend for safer side u can use default values or any other function

// const num1 = 30
// const num2 = undefined ?? 10

// const add = (num1, num2)=> {
//    console.log(num1+num2);  
// }
// add(num1,num2)



////++++ use of ?   use case: it use as a true statement to write a conclusion
// const marks  = 18
//  marks <=35 ? console.log("Result is fail") : console.log("Result is pass");
 
 


////+++++++++++++ How to find empty, object and array

// ++++ empty arry

// const emp_array = [5.5,5]
// const func = ()=> {
//     if ( emp_array.length==0){
//     console.log(("The given array is empty"));
// }
// else if (emp_array.length==1){
//     console.log("The given array contain single value");
// }
// else{
//     console.log("the given array has multiple array");
// }
// }
// func(emp_array)


/// +++++++++++++++++++++++ split method
// const str ="Ramazan"
// const arr = str.split("")
// if( arr.length==0){
//     console.log("empty");
// }
// else{
//     console.log("String has some latters");
    
// }


////++++++++++++++ empty object
// const user_details ={
//     name: "ramzajk",
// }

// if (Object.keys(user_details).length==0){
//     console.log("this is empty object");
// }
// else {
//     console.log("this is not empty object");
// }




//// +++++++++ Differencet the first, middle and last name of user

// const use_name = "Ramazan Allabhaksh tahashildar"
// const names = use_name.split(' ')
// const final_names = (names) => {
//     console.log(`fist name: ${names[0]}, middle name: ${names[1]} , last name : ${names[2]}`);
// }
// final_names(names)


