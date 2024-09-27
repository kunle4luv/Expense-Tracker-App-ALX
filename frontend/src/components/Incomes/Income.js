import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form'

function Income() {

    const {addIncome} = useGlobalContext()
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className='income_content'>
            <div className='form_container'>
              <Form/>
            </div>
            <div className='incomes'>
                
            </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`;

export default Income