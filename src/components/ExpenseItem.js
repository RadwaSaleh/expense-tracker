import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        let userInput = prompt('Please Enter your Name');
        if(userInput != null){
            setTitle(userInput);
        }
    }
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date} className="expense-date"/>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{title}</h2>
                <div className="expense-item__price">{props.amount} EUR</div>
            </div>
            <button className="expense-item__change_btn" onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;
