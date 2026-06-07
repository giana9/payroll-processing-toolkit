// Employee Array
const employees = [
    {name: "Kira", hourlyRate: 15, hoursWorked: 24},
    {name: "Jones", hourlyRate: 20, hoursWorked: 45},
    {name: "Lola", hourlyRate: 27, hoursWorked: 48}
];

// Pay Function
function calculateBasePay(rate, hours) {
    const baseHours = Math.min(hours, 40); // chooses the smaller number (won't go over 40 hrs)
    return baseHours * rate;
}

// Overtime Calculation
function calculateOvertimePay(rate, hours) {
    if (hours <= 40) return 0; // function ends if you don't work more than 40 hrs
    const overtimeHours = hours - 40;
    return overtimeHours * rate * 1.5;
}

// 15% Tax Deduction
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

// Process Payroll for 1 Employee
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked); // grabs hourly rate and hours worked from the employee for base pay
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}

// Logging Payroll for Each Employee
employees.forEach(emp => {
    const payroll = processPayroll(emp);

    console.log(`Employee Name: ${payroll.name}`);
    console.log(`Base Pay: $${payroll.basePay}`);
    console.log(`Overtime Pay: $${payroll.overtimePay}`);
    console.log(`Gross Pay: $${payroll.grossPay}`);
    console.log(`Net Pay: $${payroll.netPay}`);
    console.log(`------------------------------`);
});