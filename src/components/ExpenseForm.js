import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    /**
     * initialState is set to strings
     I store empty strings all the time not a number for amount for example because by default
     when you listen to event.target.value it's always a string
     */
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        /**
         * to stop reloading browser page
         */
        event.preventDefault();
        const newExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(newExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <div className='new-expense__controls'>
            <form onSubmit={submitHandler}>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input onChange={titleChangeHandler} type='text' value={enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type='number' value={enteredAmount} min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type='date' value={enteredDate} min='2022-01-01'/>
                </div>
                <button className='new-expense__actions' type='submit'>Add New Expense</button>
            </form>
        </div>
    )
}

export default ExpenseForm;