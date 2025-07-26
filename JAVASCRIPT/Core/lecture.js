// ============================Variables=================================
let a = 5
let b = "Hello World!"
let c = true
let d = [1,2,3,4,5]
let e = ["Ali","Ahmad","Fatima"]
let f = {
    name:"Ali",
    age:25,
    isStudent: true
}
console.log(a,b,c,d,e,f,f.name,f.age)

// ============================Arrays=================================

let a = [1, 2, 3, 4, 5]
let b = ["Ali", "Ahmad", "Fatima"]
console.log(a, b);
a.pop() // removes the last element from the array
b.push("Zainab") // adds an element to the end of the array
console.log(a,b);

// ============================loops=================================

for(let i =1;i<10;i++){
    console.log(`Value of i is:${i}`);
}

let students = ["Ali", "Ahmad", "Fatima", "Zainab"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
// console.log("--------------------for-of----------------------");
for (let name of students){
    console.log(name);
}
console.log("--------------------for-in----------------------");
for (let index in students){
    console.log(`Index: ${index}, Name: ${students[index]}`);
}
// console.log("--------------------forEach----------------------");
students.forEach((name,index)=>{
    console.log(`Index: ${index}, Name: ${name}`);
})
// ============================conditions=================================
let age = 20;
if(age>=18){
    console.log("You are an adult.");
}
else if (age<18 && age>=13){
    console.log("You are a teenager.");
}
else{
    console.log("You are a child.");
}
// ============================switch=================================
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;  
}
// ============================functions=================================
function sum(a,b){
    return a + b
}
console.log(sum(1,2));
// ============================Arrow Functions=================================
let sum = (a,b)=>{
    return a + b;
}
console.log(sum(3,2));