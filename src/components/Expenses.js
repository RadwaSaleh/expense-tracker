import {useState} from "react";
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){
    const [expensesYear, setExpensesYear] = useState('2022');
    const selectExpensesYearHandler = (selectedExpensesYear) => {
        setExpensesYear(selectedExpensesYear);
    }
    const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString() === expensesYear);

    return(
        <div className="expenses">
            <ExpensesFilter selectedOption={expensesYear} onSelectExpensesYear={selectExpensesYearHandler}/>
            <ul>
                {filteredExpenses.map((item) =>
                    <li key={item.id}>
                        <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Expenses;
