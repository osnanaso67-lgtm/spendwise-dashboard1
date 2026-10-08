// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================


// 1. Store application data

let monthlyBudget = 1000;
let totalExpenses = 650;

let remainingBalance = monthlyBudget - totalExpenses;


// 2. Create reusable budget calculation functions

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

function calculateTotalExpenses(expenses) {
    return expenses;
}


// 3. Collect user input

let userBudget = prompt("Enter your monthly budget:");
let userExpenses = prompt("Enter your total expenses:");


// Convert user input from strings to numbers

userBudget = Number(userBudget);
userExpenses = Number(userExpenses);


// 4. Perform budget calculation

let userRemainingBalance = calculateRemainingBalance(
    userBudget,
    userExpenses
);


// 5. Display results in the browser console

console.log("===== SpendWise Budget Summary =====");

console.log("Monthly Budget: $" + userBudget);

console.log("Total Expenses: $" + userExpenses);

console.log("Remaining Balance: $" + userRemainingBalance);

console.log("====================================");