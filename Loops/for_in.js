//// for_in loop applicable for object as well as array 
const user_details={
    user_name: {
        first_name: "Ramazan",
        middle_name: "Allabhaksh",
        last_name :"Tahashildar",
    },
    age: 21,
    place: "belagavi",
}


for (const key in user_details ){
//    console.log(`${key} : ${user_details[key]}`);
}

// console.log(Object.values(user_details.user_name));



const my_arr= [10,12,16,14,15,89]

for (const key in my_arr) {
    console.log(my_arr[key]); 
}