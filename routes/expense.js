const path = require('path');
const express = require('express');

const router = express.Router();
const expensecontroller = require('../controllers/expense');
const companycontroller = require('../controllers/company');

router.post('/add-expense', expensecontroller.addExpense);
router.post('/add-company', companycontroller.addCompany);

router.get('/get-expense', expensecontroller.getExpense);

router.delete('/delete-expense/:id', expensecontroller.deleteExpense);

// router.edit('/edit-user/:id', usercontroller.editUser);

module.exports = router;