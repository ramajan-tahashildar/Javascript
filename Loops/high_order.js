// //Map function
// const map = new Map()
// map.set('in', 'india')
// map.set('bl', 'bangladesh')
// map.set("uae","dubai")

// // console.log(map)
// for ( const [element, value] of map){
//     // console.log(`${element} is code and contry is ${value}`);
// }

// const strings = "hello my name is ramazan, thank you"
// for (const i of strings) {
//     if( i==' '){
//         continue
//     }
//     // else
//     // console.log(i);
// }
    
// const mylanguage = {
//     js : "javascripts",
//     py : "python",
//     cn : "computer network",
//     dbms: "Database managemant system",
//     os: 'operating system'
// }
//     // console.log(mylanguage.os, mylanguage.dbms);
//     for (const key in mylanguage) {
//             // console.log(`key for ${key} is ${mylanguage[key]}`);
            
//     }
    
//     const arry = ["ramazan", "sami", "Mummay"]
//     for (const key in arry) {
//         console.log(arry[key]);
//     }


const myarr = ["name", "username", "sarname", "address"]
    
myarr.forEach((item)=>{
    console.log("details", item);
})

const myarr_object = [
    {
        course : "Javascript",
        price : 899,
        exam : 'nil',
    },
    {
        course : "Java",
        price : 1299,
        exam : 'yes', 
    },
    {course : "Python",
        price : 499,
        exam : 'nil',
    }
]

myarr_object.forEach((list)=>{
    console.log(list.course, list.price);
    
})

