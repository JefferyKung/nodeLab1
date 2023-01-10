const {mySum} = require('./func1');

const myArr = [1,2,3,4]
let result = mySum(...myArr)
console.log(result);

// 以下第二題

let mySecondArray = myArr.map((num)=> num*2);
// console.log(mySecondArray);
console.log(mySecondArray.filter(num=> num> mySum(...mySecondArray)/myArr.length));

//以下第三題

setTimeout(()=>{console.log("Goodbye")},3000);

//以下第四題

const Employee = {
    name:"Isaac" ,
    email: "isaac@gmail.com" ,
    department: "Marketing" ,
    startDate: "2023,01,05"
}

const { name , email} = Employee;

const Person = {
    name:name, email:email
}

console.log(Person);