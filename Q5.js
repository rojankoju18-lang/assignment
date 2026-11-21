const calculateBonus =(salary) => {
    if (salary>=40000) {
        return salary*0.4;
    } else if (salary<40000) {
        return salary*0.05;
    } else {
        return 0;
    }
}

const calculateTax =(salary) => {
    return salary*0.05;
}
const calculateNetSalary =(salary, bonuscallback, taxcallback) => {
    const bonus = bonuscallback(salary);
    const tax = taxcallback(salary);
    return salary + bonus - tax;
}

const generatePayslip =(employeeName, salary, callback) => {
    const netSalary = callback(salary, calculateBonus, calculateTax);
    console.log("Employee Name: " + employeeName);
    console.log("Basic Salary: Rs. " + salary);
    console.log("Bonus: Rs. " + calculateBonus(salary));
    console.log("Tax: Rs. " + calculateTax(salary));
    console.log("Net Salary: Rs. " + netSalary);
}

generatePayslip("Ram", 50000, calculateNetSalary);