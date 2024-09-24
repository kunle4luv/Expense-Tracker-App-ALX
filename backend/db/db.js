const mongoose = require('mongoose');

const db = async () => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
            console.log('Db is connected') //This is to check if the database is working
    } catch (error) {
        console.log('DB connection Error');//It shows this message if the database isn't working
    }
}

module.exports = {db}