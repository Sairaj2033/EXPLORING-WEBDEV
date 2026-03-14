//  let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(function (el)  { // compact 
//     console.log(el);
// });
let students  = [
    {
    name: "aman",
    marks: 95,
},
{
    name:"sai",
    marks: 96,
}, 
 {
    name: "el",
    marks: 55,
},
];



// arr.forEach((student) => {
//     console.log(student.marks);

// });


//---------------------------------------------//

//MAP//
// similar to foreach

// let num = [1,2,3,4];

// let double = num.map((el) => {
//     return el * 2;

// });

// let gpa = student.map((el) => {
//     return marks / 10;
// });

let gpa = students.map((el) => {
    return el.marks / 10;
});


let nums = [1,2,3,4,5,6,7,8,9,10,11];
let ans = nums.filter((el) => 
{
    return el% 2 == 0; 
})
