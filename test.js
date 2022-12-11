// import the employee class
const Employee = require('./employee.js');

// create instance of Employee(name, occupation)
const employee = new Employee("John Wick", "Dog Lover");

// create a global function sayName from the employee method say name
const sayName = employee.sayName;

// create new function with the employee bound to the global function to create
// a new function sayEmployeeName
const sayEmployeeName = sayName.bind(employee);

// calling this will output the original method call that is now
// within this function and bound to employee
sayEmployeeName()

// this now works in the setTimeout as we have bound the 
// `this` object to the employee within this global context function
setTimeout(sayEmployeeName, 1500);