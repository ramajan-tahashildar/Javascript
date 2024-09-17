let mydate= new Date()
console.log(mydate.toString());


let my= new Date("2002-11-22")
console.log(my.toLocaleDateString());



let current= Date.now()
console.log(Math.floor(current/1000));


const newdate= new Date()
console.log(newdate);
console.log(newdate.getMonth());

console.log(`joining data of Ramazan is ${new Date().toDateString()}`);
