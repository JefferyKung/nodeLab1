
const mySum = (...numbers) => {
    let result=0;

    numbers.forEach((number)=>{
        result += number;
    })
    
    return result;
}

module.exports = {mySum};

// console.log(mySum(1,2))
// console.log(mySum(1,2,3,4))