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