
//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function reverseStringArray(arr){
    //sortedArray =arr.sort()

    let sortedArray = arr.sort()
    let descending = sortedArray.reverse()
    console.log(descending);


    const reverseString =arr.map(str =>[...str].reverse().join(''));
    console.log(reverseString);
}
//example
reverseStringArray(["Jane","Muthoni","Kelvin","Lyne"]);


//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
    function checkElement(array,index){
        const number = array[index];

        if(number > 0){
            return number +"is positive";
        }else if(number< 0){
            return number + "is negative"
        }else{
            return number + "is zero"
        }
    }
//example
const numbers = ([1,-2,3,0,4])

//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortBySalary(employees){
    return employees.sort((a,b) => a.salary -b.salary);
}
// example
const employees = [
    {id:1,name:'James',salary: 8000},
    {id:2,name:'Loice',salary: 60000},
    {id:3,name:'Mary',salary:40000}
];
const sortedEmployees =sortBySalary(employees);
console.log(sortedEmployees);

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function doubleNum(numbers){
    numbers.forEach((number) => {
        console.log(number*2);
        
    });
}
//example
doubleNum([2,6,8,10]);

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function transformArray2(arr){
    const firstFour = arr.slice(0,4).map(item => item * 8);
    const lastTwo = arr.slice(-2).map(item => item +5);
    const newArr = firstFour
}