import React from 'react'
import styled from 'styled-components'
import Button from '../button/button'
import { calender, comment, dollar, trash } from '../../utils/Icons'

function incomeItems({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatiorColor,
    type
}) {
  return (
    <IncomeItemStyled>
        <div className='icon'>

        </div>
        <div className='content'>
            <h5>{title}</h5>
            <div className='inner-content'>
                <div className='text'>
                    <p>{dollar} 45</p>
                    <p>{calender} {date}</p>
                    <p>
                        {comment}
                        {description}
                    </p>
                </div>
                <div className='btn-con'>
                    <Button 
                        icon={trash}
                        bpad={'1rem'}
                        brad={'50%'}
                        bg={'var(--primary-color)'}
                        color={'#fff'}
                        icolor={'#fff'}
                        hcolor={'var(--color-green)'}
                        // onClick={() => handleDelete(id)}
                    />
                </div>
            </div>
        </div>
    </IncomeItemStyled>
    
  )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        heigth: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .rem;
        h5{
            font-size: 1.3rem;
            padding-left: 3rem;
            position: relative;
        }
    }
`;

export default incomeItems
