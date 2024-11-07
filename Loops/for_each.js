///// foreach() usal it is a callback function no need to write a function name

const arr =["ramazan","heena", "sami", "mom","dad",5 ]
 
// arr.forEach((i)=> {
//     if(i==5){
//         console.log(`total member in this family is 5`);
//         return
//     }
//     console.log(`the element present in array are ${i+ " family member"}`)
// })

///// function sepearted
// function my_code(item){
//     if(item==5){
//         return
//     }
//     console.log(item);
// }
// arr.forEach(my_code)

// arr.forEach((item,i, an)=>{
//     console.log(item, i, an);
// })

// arr.forEach(function(key, index, arr){
//     console.log(key,index, arr);
// })


///// ++++++++++ iteraction of object using for_each
 const user_details =[
    {
        user_name : "Ramazan",
        id : "2Ji21cs032"
    },
    {
        user_name: "heena",
        id : "21ji002"
    },
    {
        user_name: "sami",
        id : 20322124
    }
 ]

 user_details.forEach((item)=>{
    //  console.log(` user name is ${item.user_name} and id is ${item.id}`);
 })


 const mymap = new Map()
 mymap.set("js", "javascripts")
 mymap.set("CN", "computer network")
 mymap.set("DBMS","Database management system")
 mymap.set("PY","Python")
 console.log(mymap);
 
 mymap.forEach((item,value)=>
{
    console.log(`the item is ${item} and value is ${value}`);
    
})