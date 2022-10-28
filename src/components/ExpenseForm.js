import './ExpenseForm.css'
import {useState, useRef} from "react";

const ExpenseForm = (props) => {
    /**
     * initialState is set to strings
     I store empty strings all the time not a number for amount for example because by default
     when you listen to event.target.value it's always a string
     */
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isValidTitle, setIsValidTitle] = useState(true);
    const [isValidAmount, setIsValidAmount] = useState(true);
    const [isValidDate, setIsValidDate] = useState(true);
    const submitBtnRef = useRef(null);

    const titleChangeHandler = (event) => {
        if(enteredTitle.trim().length > 0){
            setIsValidTitle(true);
            submitBtnRef.current.removeAttribute('disabled');
        }
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        if(enteredAmount.trim().length > 0){
            setIsValidAmount(true);
            submitBtnRef.current.removeAttribute('disabled');
        }
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        if(enteredDate.trim().length > 0){
            setIsValidDate(true);
            submitBtnRef.current.removeAttribute('disabled');
        }
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
        if (enteredTitle.trim().length || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0){
            submitBtnRef.current.setAttribute('disabled', true);
            if(enteredTitle.trim().length === 0){
                setIsValidTitle(false);
                return;
            }
            if(enteredAmount.trim().length === 0){
                setIsValidAmount(false);
                return;
            }
            if(enteredDate.trim().length === 0){
                setIsValidDate(false);
                return;
            }
        }

        props.onSaveExpenseData(newExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <div className='new-expense__controls'>
                <form onSubmit={submitHandler}>
                <div className={`new-expense__control ${!isValidTitle ? 'invalid' : ''}`}>
                <label>Title: *</label>
                <input onChange={titleChangeHandler} type='text' value={enteredTitle} />
                </div>
                <div className={`new-expense__control ${!isValidAmount ? 'invalid' : ''}`}>
                <label>Amount: *</label>
                <input onChange={amountChangeHandler} type='number' value={enteredAmount} min='0.01' step='0.01'/>
                </div>
                <div className={`new-expense__control ${!isValidDate ? 'invalid' : ''}`}>
                <label>Date: *</label>
                <input onChange={dateChangeHandler} type='date' value={enteredDate} min='2022-01-01'/>
                </div>
                <button className='new-expense__actions' type='submit' ref={submitBtnRef} disabled={true}>Add New Expense</button>
                <button className='new-expense__actions' type='button' onClick={props.onCancel}>Cancel</button>
                </form>
                </div>
    )
}

export default ExpenseForm;