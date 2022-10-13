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
            <ul>
                {props.items.map((item) =>
                    <li>
                        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Expenses;
