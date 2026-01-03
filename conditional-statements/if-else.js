/* Write a function to return sum of two numbers */

function sumOfTwoNumberrs(num1, num2){
    return num1 + num2;
}

console.log(sumOfTwoNumberrs(5, 10)); // Output: 15
console.log(sumOfTwoNumberrs(-3, 7)); // Output: 4


/* Write a function to return product of two numbers */

function productOfTwoNumbers(num1, num2){
    return num1 * num2;
}

console.log(productOfTwoNumbers(5, 10)); // Output: 50
console.log(productOfTwoNumbers(-3, 7)); // Output: -21


/* Write a function check if a person if eligible to vote */

function isEligibleToVote(age){
    if(age<0){
        return "Invalid age";
    }else if(age<18){
        return "Not eligible to vote";
    }else{
        return "Eligible to vote";
    }
}

console.log(isEligibleToVote(20)); // Output: Eligible to vote
console.log(isEligibleToVote(16)); // Output: Not eligible to vote
console.log(isEligibleToVote(-5)); // Output: Invalid age

/* Write a function check if a number is even or odd */

function isEvenOrOdd(num){
    if(num%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}

console.log(isEvenOrOdd(4)); // Output: Even
console.log(isEvenOrOdd(7)); // Output: Odd