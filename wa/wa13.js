// Problem 1
const employees = [
    { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
    { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
    { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
  ];
  console.log('Problem 1:', employees);
  
  // Problem 2
  const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
  };
  console.log('Problem 2:', company);
  
  // Problem 3
  const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
  company.employees.push(newEmployee);
  console.log('Problem 3:', company.employees);
  
  // Problem 4
  const totalSalary = company.employees.reduce((acc, employee) => acc + employee.salary, 0);
  console.log('Problem 4: Total Salary', totalSalary);
  
  // Problem 5
  company.employees.forEach(employee => {
    if (employee.raiseEligible) {
      employee.salary *= 1.10;
      employee.raiseEligible = false;
    }
  });
  console.log('Problem 5:', company.employees);
  
  // Problem 6
  const wfhEmployees = ['Anna', 'Sam'];
  company.employees.forEach(employee => {
    employee.wfh = wfhEmployees.includes(employee.firstName);
  });
  console.log('Problem 6:', company.employees);
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Problem 1:', JSON.stringify(employees, null, 2));
    console.log('Problem 2:', JSON.stringify(company, null, 2));
  });
  