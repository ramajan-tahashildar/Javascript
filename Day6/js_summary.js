// primitive
// data type: String, number, Boolean, null, Symbol

const id= Symbol("1235")
const id2=Symbol("1235")
   //symbol is used to make value unquie 
console.log(id===id2); //false



// non-primitive (reference)
// type: Array, Object, function
 

// /Array
const family=["me", "dad", "mom"]
console.log(family);



// Objects : objects are writen in key value pair withhin {}

let details= {
  user:"Ramazan",
  age:22,
}

console.log(details);


// function
 const myfunction= function(){
    console.log("its my function");
}
 console.log(myfunction);


 //all non-primitive datas are present as object type 
//  data types
  /* null >> Object
   undefined >> undefined  
   number >> number
   Array >> Object... etc */
 