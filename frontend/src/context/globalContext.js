import React, { useContext, useState } from "react"
import axios from 'axios'

const Base_URL = "http://localhost:5000/api/alxproject/"; 


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {


    const [income, setIncomes] = useState([])
    const [expenses, setExpense] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (income) => {
        const response = await axios.post(`${Base_URL}add_income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}