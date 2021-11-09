import './ExpenseItem.css';

function ExpenseItem(props){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return(
        <div className="expense-item">
            <div>{props.date.toLocaleDateString("en-US", options)}</div>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{props.title}</h2>
                <div className="expense-item__price">{props.amount} EUR</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
