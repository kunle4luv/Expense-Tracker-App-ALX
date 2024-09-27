import { useState } from 'react';
import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';

function Form() {

    const {addIncome} = useGlobalContext()

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })


    const {title, amount, date, category, description} = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault() //Here it is used to prevent a refresh
        addIncome(inputState)
    }
  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className='input_control'>
        <input 
            type='text'
            value={title}
            name={'title'}
            placeholder='Income Title'
            onChange={handleInput('title')}
        />
      </div>
      <div className='input_control'>
        <input 
            type='text'
            value={amount}
            name={'amount'}
            placeholder='Income Amount'
            onChange={handleInput('amount')}
        />
      </div>
      <div className='input_control'>
        <DatePicker
            id='date'
            placeholderText='Select a date'
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
                setInputState({...inputState, date: date})
            }}
        />
      </div>
      <div className='input_control selects'>
        <select required value={category} id='category' name='category' onChange={handleInput('category')}>
            <option value="" disabled >Selected option</option>
            <option value="salary">Salary</option>
            <option value="allowance">Allowance</option>
            <option value="stocks">Stocks</option>
            <option value="se_project">SE Project</option>
            <option value="savings">Savings</option>
            <option value="bank">Bank Transfer</option>
            <option value="investments">Investments</option>
            <option value="others">Others</option>
        </select>
      </div>
      <div className='submit_btn'>
        <button>Add Income</button>
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form``

;

export default Form
