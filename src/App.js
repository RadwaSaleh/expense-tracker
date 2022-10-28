import {Fragment, useState} from "react";
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from "./components/NewExpense";

const FIXED_EXPENSES = [
    {
        id: Math.random(),
        title: 'Apartment Rent',
        amount: 800,
        date: new Date(2022, 4, 27),
    },
    {
        id: Math.random(),
        title: 'Gas',
        amount: 50,
        date: new Date(2022, 11, 1) },
    {
        id: Math.random(),
        title: 'Grocery Shopping',
        amount: 200,
        date: new Date(2022, 9, 1),
    },
    {
        id: Math.random(),
        title: 'Transportation',
        amount: 30,
        date: new Date(2022, 10, 1),
    },
];
function App() {
    const [expenses, setExpenses] = useState(FIXED_EXPENSES);

    const addNewExpenseHandler = (expense) => {
        setExpenses((prevState) => {
            return [expense, ...prevState];
        });
    }
  return (
    <Fragment>
        <h2 className="App">Expense Tracker</h2>
        <NewExpense onAddNewExpense = {addNewExpenseHandler}/>
        <Expenses items={expenses}/>
    </Fragment>
  );
}

export default App;
