import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props){
    const items = [];
    for(let i=0; i < props.items.length; i++){
        items.push(<ExpenseItem title={props.items[i].title} amount={props.items[i].amount} date={props.items[i].date}/>)
    }
    return(
        <div className="expenses">
            {items}
        </div>
    );
}

export default Expenses;
