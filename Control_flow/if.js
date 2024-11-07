///+++ if / else statement
// const user_logged_in = true;

// if( user_logged_in){
//     console.log("User logged in properly");
// }
// else{
//     console.log("some error");
// }

//++++ another example
const user_logged_in = 1;
const  credential = true;

if( (user_logged_in || credential)== true){
    console.log("User logged in properly");
}
else{
    console.log("some error");
}