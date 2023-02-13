export default function ExpenseItem({ expense, deleteItem }) {
  return (
    <div className="expense-item card p-1 border-light mb-1">
      <div className="row">
        <div className="col-3 date">{expense.date}</div>
        <div className="col-3 title">{expense.title}</div>
        <div className="col-3 category">{expense.category}</div>
        <div className="col-2 amount text-end">
          {expense.amount.toFixed(2)}€
        </div>
        <div className="col-1">
          <button
            onClick={() => deleteItem(expense.id)}
            className="btn btn-danger btn-sm"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
