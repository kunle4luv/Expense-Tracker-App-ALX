const IncomeSchema = require('../modules/IncomeItem')

exports.AddIncome = async(req, res) => {
    const{title, amount, category, date, description} = req.body

    //here is a mathod for adding income or creating an intance for income
    const income = IncomeSchema({
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
        await income.save(
            res.status(200).json({message: 'Income added successfully'})
        )
    } catch (error) {
        res.staus(500).json({message: 'Server Error'})
    }
    console.log(income)
}

//The get income method to get income 
exports.getIncomes = async (req, res) => {
    try {
        const income = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(income)
    } catch (error) {
        res.status(200).json({message: 'Server Error'})
    }
}

//A delete method to delete incomes
exports.deleteIncome = async (req, res) => {
    //We will be using an id to get the income we want to delete 
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Income deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}