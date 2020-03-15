import React from 'react';
import ExpenseItem from './ExpenseItem';
import {MdDeleteForever} from "react-icons/md";

export default function ExpenseList({expenses}) {
    return (
        <>
          <ul className='list'>
            {expenses.map(expense => {
                return <ExpenseItem key={expense.id} expense={expense} />;
            })}
          </ul>
          {expenses.length > 0 && (<button className='btn'>Clear ExpenseItem
          <MdDeleteForever className='btn-icon' />
          </button>
          )}
        </>
    )
}
