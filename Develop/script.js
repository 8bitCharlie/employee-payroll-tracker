// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let addEmployees = true;
var employees = [] 
const collectEmployees = function() {
  while (addEmployees) {
  // TODO: Get user input to create and return an array of employee objects
var firstName = prompt("What's your first name?")
var lastName = prompt("What's your last name?")
var salary = prompt("What is your salary?")
var newEmployees = confirm("Do you want to add another employee?")
var Employee = {
  firstName: firstName,
  lastName: lastName,
  salary: salary,
}
employees.push (Employee)
console.log(employees)
if (newEmployees === false) {
  addEmployees = false
}
}
return employees
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // use loop to capture all salaries as var divide by employeesarray.length
  var salaries = 0
 for (let i = 0; i < employeesArray.length; i++) {
  const element = employeesArray[i];
  salaries = salaries + element.salary 
 }
 var average = salaries / employeesArray.length
 console.log (average)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // math.random for employeesArray.length
  //console.log(employeesArray[(math.floor(math.random() * employeesArray.length))])
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];
  console.log(randomEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
