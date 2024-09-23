 function sum(num1, num2){
    // console.log(num1+num2);
    
    return num1+ num2
 }

// console.log(sum(5,5));        // is you use writen within ur function then use need to use console.log to print
// sum(5,5)                           // whene you use consol.log in ur function then only u can use like this



function userlogin(user_name='user'){            //user_name="user": it is by default  
    if(!user_name){                               // if condition check wither the user name is string of no also u can use (user===undefind) if user name is not valid means not string then it stope her only
        return 'plz enter user name'
    }
     return `${user_name} is just logged in`
}

// console.log(userlogin("ramazan"));




/// to give mutiple parameters we use ...(parameter_name)

function addtocart(...add ){
    return sum (...add)
    // return add  // to writen array 
}
console.log(addtocart(1000,200,200));

const user= {
    name : "ramazan",
    sem : 7,
    age : 21,
}
 
function login_details(uniq_name){
    console.log(`A person called ${uniq_name.name} from ${uniq_name.sem} sem and age is ${uniq_name.age} is logged into the system`);
}

// login_details(user)  // if u used different parameter name u should use object name that is to be used


/// for array in function
const myarray =[10,12,15,18,50,60]

function getarray(detials_array){
    return detials_array[2]
}
// console.log( getarray(myarray));


function user_login(credential){
    return  `${credential.name} is logged in into the system at ${credential.time}`
}




//++++++ giving data by defining the object separately
const user_data = {
    name :"saket",
    time : "9:30 PM",
    user_password: 123456789,
}
// console.log(user_login(user_data));


// //+++++ giving data manually by using objects within console.log
// // console.log(user_login({
// //     name:'ramazan',
// //     time : "8:30 PM",
// // }));



function login_page(credential){
    return `${credential.name} is logged in and password is ${credential.user_password}`
}
// console.log( login_page(user_data));








