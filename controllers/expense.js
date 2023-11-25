const Expense = require('../models/expense');

exports.addExpense = async (req, res, next) => {
    try {

        console.log('controller,add');
        const category = req.body.category;
        const expense = req.body.expense;

        const data = await Expense.create({ category: category, expense: expense });
        res.status(201).json({ newExpenseDetail: data });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

exports.getExpense = async (req, res, next) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json({ allExpenses: expenses });
    }
    catch (error) {
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({ error: error });
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        const eId = req.params.id;
        await Expense.destroy({ where: { id: eId } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
