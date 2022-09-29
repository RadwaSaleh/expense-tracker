import {useState} from "react";
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){
    const items = [];
    const [expensesYear, setExpensesYear] = useState('2022');
    const selectExpensesYearHandler = (selectedExpensesYear) => {
        setExpensesYear(selectedExpensesYear);
    }

    for(let i=0; i < props.items.length; i++){
        items.push(<ExpenseItem title={props.items[i].title} amount={props.items[i].amount} date={props.items[i].date}/>)
    }
    return(
        <div className="expenses">
            <ExpensesFilter selectedOption={expensesYear} onSelectExpensesYear={selectExpensesYearHandler}/>
            {items}
        </div>
    );
}

export default Expenses;
