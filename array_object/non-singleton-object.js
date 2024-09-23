// const user = new Object()

const user={}

user.name="ramazan"
user.usn="2Ji21CS032"
user.sem="7th"
user.location="Belagavi"

user.cgpa={ 
     sem_one : 8.2 ,
     sem_two : 9.1,
     last_sem : 9.6,
}
// console.log(user);

// console.log(`congooo for last sem score ${user.cgpa.last_sem}`);
// console.log(user.cgpa.sem_one);



 const students ={
    first : "ramazan",
    second : "heena",
    third : "sami",
 }
 
//  last_object ={ user, students}
//  last_object ={...user,...students}
// last_object = Object.assign(user, students)
//  console.log(last_object);
 

// console.log( Object.keys(students));



const details =[ 
    {
        R_no : 32 ,
        name : "ramazn",
        score : 90, 
        branch : "CSE" ,
    },

    {
        R_no : 38 ,
        name : "saket",
        score : 99, 
        branch : "CSE" ,
    },
    {
        R_no : 117 ,
        name : "safa",
        score : 95, 
        branch : "ECE" ,
    }
]
// console.log(Object.values(details[1]));
// console.log(Object.keys(details[1]));
// console.log(Object.entries(details[1]));

// details.forEach(detail => {
//     console.log(detail.name);
// });

    
// console.log(details[2].hasOwnProperty("branch"));
