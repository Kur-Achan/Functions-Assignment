//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending orderconst arr1 = ["mango","orange","Apple","Kiwi"]
const arr1 = ["Jane","Mary","Pauline","Tracy"];
const sortedArray = [...arr1].sort();
console.log(sortedArray);

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
let arr=[12,4,3,50,0]

function checkNumber(arr) {
    arr.forEach(element => {
       if (element > 0) {

         console.log("positive");
       } else if (element < 0) {
         console.log("negative");
       
       } else {
         console.log("zero");
       }
    //Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
    function sortEmployers(employees) {
        return employees.sort((a, b) => a.salary - b.salary);
       }
       const employees = [
        { id: 1, name: 'Kelvin', salary: 45000 },
        { id: 2, name: 'James', salary: 37000 },
        { id: 3, name: 'Duncan', salary: 12000 }
       ];
       const EmployeesSalary = sortEmployers(employees);
       console.log(EmployeesSalary);
    
       //Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function Array(numbers) {
    numbers.forEach((number, index) => {
       if (index < 4) {
         numbers[index] = number * 8;
       } else if (index >= numbers.length - 2) {
         numbers[index] = number + 5;
       }
    });
    console.log(numbers);
