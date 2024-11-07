// /// return a number from given array 
//  const arr = [1,2,3,4,5,6,7,8,9,12,22,25,34,45,678,89,100]

// const outcome = arr.filter((Number)=>Number%2==0)

// console.log(outcome);

// const new_outcome= []
// arr.forEach((item)=>{
//     if(item%2==0){
//         new_outcome.push(item)
//     }
// })
// console.log(new_outcome);



// +++++++++++++++++++  Chaining

// const div_3 = [1,2,3,4,5,67,8,10,25,9,99,23,45,67,789,12,34,567,87,18,21,24,30]

// const out = div_3
//             .map((item)=> { 
//                    return item+2
//                          })
//             .filter((item)=>{
//                 return item%2!==0
//                          })
//             .filter((item)=> item%3==0)
// console.log(out);




//// shoping cart total payment details

const list_of_item_and_price =[ 
    {
        item : 'rice' ,
        price : 70,
        kg : 2,
    },
    {
        item : 'dal' ,
        price : 20,
        kg : 1,
    },
    {
        item : 'chapati' ,
        price : 10,
        kg : 6,
    },
    {
        item : 'bhaji' ,
        price : 29,
        kg : 2,
    },
]

const total_payment=  list_of_item_and_price.reduce((acc,list)=> {
    // console.log(list.kg*list.price);
    
    return acc+list.price*list.kg
},0)

// console.log(total_payment);



///// examples

const list = [2,3,4,556,68,863,754,356,853,987]

const total= list.reduce((acc,item)=>{
    console.log(`${acc} + ${item}`);
    return acc+item
    
},0)
console.log(`Total amount of ${list} is ${total}`);
