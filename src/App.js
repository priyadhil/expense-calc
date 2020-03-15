import React, {useState} from 'react';
import './App.css';
import Alert from './Components/Alert';
import ExpenseList from './Components/ExpenseList';
import ExpenseForm from './Components/ExpenseForm';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {id:uuidv4(), charge:'rent', amount:'600'},
  {id:uuidv4(), charge:'car', amount:'200'},
  {id:uuidv4(), charge:'credit card', amount:'1000'},
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  
  return (
    <>
      <Alert />
      <h1>Expense Calculator</h1>
      <main className='App'>
        <ExpenseForm />
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        Total Spending : <span className='total'>
          $ {expenses.reduce((total, current) => total += total + current, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
