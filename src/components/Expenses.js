import {useState} from "react";
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){
    const [expensesYear, setExpensesYear] = useState('2022');
    const selectExpensesYearHandler = (selectedExpensesYear) => {
        setExpensesYear(selectedExpensesYear);
    }

    return(
        <div className="expenses">
            <ExpensesFilter selectedOption={expensesYear} onSelectExpensesYear={selectExpensesYearHandler}/>
            {props.items.map((item) => <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>)}
        </div>
    );
}

export default Expenses;
