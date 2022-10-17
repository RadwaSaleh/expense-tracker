
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import {useState} from "react";

const NewExpense = (props) => {
    const [isExpenseFormShown, setIsExpenseFormShown] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const newExpense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(newExpense);
    }

    const showExpenseFormHandler = () => {
        setIsExpenseFormShown((prevState) => {
            return !prevState;
        })
    }
    return (
        <div className='new-expense'>
            {!isExpenseFormShown && <button onClick={showExpenseFormHandler}>Add New Expense</button>}
            {isExpenseFormShown && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={showExpenseFormHandler}/>}
        </div>
    )
}

export default NewExpense;