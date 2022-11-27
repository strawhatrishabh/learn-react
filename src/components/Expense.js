import ExpenseItem from "./ExpenseItem"

function Expense(props) {
    return (
        <div className="expenses">
            <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
            <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
            <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
            <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
        </div>
    )
}

export default Expense