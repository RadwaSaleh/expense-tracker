import React, {Fragment, useEffect, useState} from "react";
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from "./components/NewExpense";
import API from './api';

function App() {

    const [expenses, setExpenses] = useState([]);

    const addNewExpenseHandler = (expense) => {
        setExpenses((prevState) => {
            return [expense, ...prevState];
        });
    }

    async function fetchData() {
        const data = await API.getAllExpenses();
        setExpenses([...data]);
    }

    useEffect(() => {
        fetchData().then(r => console.log("inside useEffect"));
    }, []);

  return (
    <Fragment>
        <h2 className="App">Expense Tracker</h2>
        <NewExpense onAddNewExpense = {addNewExpenseHandler}/>
        <Expenses items={expenses}/>
    </Fragment>
  );
}

export default App;
