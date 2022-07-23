import { useState } from 'react'

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredData, setEnteredData] = useState('');


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredData)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredData('');
    };



    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }; 

    const dateChangeHandler = (event) => {
        setEnteredData(event.target.value)
    };

    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredData} onChange={dateChangeHandler}  />
            </div>
        </div>
        <div className='new-expense__action'>
            <button type="submit">Add expense</button>
        </div>
    </form>)
};

export default ExpenseForm;