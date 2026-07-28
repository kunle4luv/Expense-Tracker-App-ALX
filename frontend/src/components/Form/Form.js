import { useState } from 'react';
import React from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../button/button';
import { plus } from '../../utils/Icons';

function Form() {
    //Destructing the addIncome
    const {addIncome} = useGlobalContext()

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })


    const { title, amount, date, category, description } = inputState;

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
        <select 
          required 
          value={category} 
          id='category' 
          name='category' 
          onChange={handleInput('category')}
        >
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
      <div>
        <textarea 
          name="description"
          id="description"
          cols="30"
          rows="4"
          value={description}
          placeholder="Add a Reference"
          onChange={handleInput('description')}
        >

        </textarea>
      </div>
      <div className='submit_btn'>
        <Button 
            name={'Add Income'}
            icon={plus}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent'}
            color={'fff'}
        />
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem
        border-raduis: 10px;
        border: 2px solid rgb(76, 175, 221)
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color:rgba(34, 34, 96, 0.9);
        &::placeholder{
              color: rgba(34, 34, 96, 0.4)
        }
    }
    .input_control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit_btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`

;

export default Form
