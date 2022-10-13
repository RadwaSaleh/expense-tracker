import {useState} from "react";
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from "./components/NewExpense";

const FIXED_EXPENSES = [
    {
        id: Math.random(),
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: Math.random(),
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12) },
    {
        id: Math.random(),
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: Math.random(),
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
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
    <div className="App">
        <h2>Expense Tracker</h2>
        <NewExpense onAddNewExpense = {addNewExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
