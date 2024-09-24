const {AddIncome, getIncomes, deleteIncome} = require ('../contollers/income');
const {AddExpense, getExpenses, deleteExpense} = require ('../contollers/expense');

const endpoint = require('express').Router();


endpoint.post('/add_income', AddIncome)
        .get('/get_incomes', getIncomes)
        .delete('/delete_income/:id', deleteIncome)
        .post('/add_expense', AddExpense)
        .get('/get_expenses', getExpenses)
        .delete('/delete_expense/:id', deleteExpense)

module.exports = endpoint