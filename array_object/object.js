const mysym = Symbol("key1");
const cse ={
    name : "ramazan",
    sem : "7th_sem",
    usn : "2JI21CS032",
    location: "belagvi",
    // [mysym]: "mykey551",
}

// console.log(cse.name);
// console.log(cse["sem"]);
// console.log(cse[mysym], typeof mysym);

// Object.freeze(cse)
// cse.location="mahalingpur"
// console.log(cse.location);
// console.log(cse);


// cse.sub = function () {
//     console.log(`elective subject for ${this.sem}`);
// }
// console.log(cse.sub());



cse.open= function(){

    cse.open=`elective subject for ${this.sem}`;
}
console.log(cse.open());

// console.log(cse);





// const cse = {
//     name: "ramazan",
//     sem: "7th_sem",
//     usn: "2JI21CS032",
//     location: "belagvi",
// }

// cse.open = function() {
//     // Set the open property with the desired string
//     this.open = `open elective subject for ${this.sem}`;
//     return `open ${this.open}`;
// }

// // Call the function and log the result
// console.log(cse.open()); // Logs: open open elective subject for 7th_sem

// // Log the updated cse object
// console.log(cse); // Logs the object with updated 'open' property


// +++++++++ De-structure+++++++++

const {location: place}= cse   // location variable rename as place now we can access the location using  variable place
console.log(place);




