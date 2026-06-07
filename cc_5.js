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