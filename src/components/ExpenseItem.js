import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

// Stateless component = presentational component = dumb component
function ExpenseItem(props){
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date} className="expense-date"/>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{props.title}</h2>
                <div className="expense-item__price">{props.amount} EUR</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
