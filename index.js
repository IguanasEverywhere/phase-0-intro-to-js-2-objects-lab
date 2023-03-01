// Write your solution in this file!
let employee = {
  name: '',
  streetAddress: ''
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
  let newEmployeeObj = {...employeeObj};
  newEmployeeObj[key] = value;
  return newEmployeeObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  employeeObj[key] = value;
  return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, key) {
  let newEmployeeObj = {...employeeObj};
  delete newEmployeeObj[key];
  return newEmployeeObj;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
  delete employeeObj[key];
  return employeeObj;
}