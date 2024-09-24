const ExpenseSchema = require('../modules/ExpenseItem')

exports.AddExpense = async(req, res) => {
    const{title, amount, category, date, description} = req.body

    // creating an intance for expense
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        date,
        description
    })
    //To save the data we use try catch
    try {
        //validations
        if (!title || !category || !date || !description) {
            return res.status(400).json({message: 'All fields must be filled'})
        }
        if (amount <= 0 || !amount ==='number') {
            return res.status(400).json({message: 'Only a positive amount value'})
        }
        await expense.save(
            res.status(200).json({message: 'Expense added successfully'})
        )
    } catch (error) {
        res.staus(500).json({message: 'Server Error'})
    }
    console.log(expense)
}

//The get expense method to get expense 
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(200).json({message: 'Server Error'})
    }
}

//A delete method to delete expense
exports.deleteExpense = async (req, res) => {
    //We will be using an id to get the expense we want to delete 
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message: 'Expense deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}