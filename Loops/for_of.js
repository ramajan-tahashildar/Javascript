/// for_of only applicable for array, map()


const arr =[1,2,3,4,45]
 for (const i of arr) {
    // console.log(`the values in array is ${i}`);
 }  


 const mymap = new Map()
 mymap.set("js", "javascripts")
 mymap.set("CN", "computer network")
 mymap.set("DBMS","Database management system")
 mymap.set("PY","Python")
 console.log(mymap);
 


for (const [element,key] of mymap) {
   console.log(`the long form of ${element} is ${key}`);  
}