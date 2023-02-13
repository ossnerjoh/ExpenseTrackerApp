import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses, deleteItem }) {
  return (
    <div className="ExpensesList p-3 card">
      <h5>Deine Ausgaben</h5>
      {/* Expenses List */}
      {expenses.length === 0 || !expenses ? (
        <p className="text-danger">Du hast noch keine Ausgaben hinzugefügt</p>
      ) : (
        expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              deleteItem={deleteItem}
            />
          );
        })
      )}

      {/* Total Amount */}
      <div className="alert alert-success pe-5 d-flex justify-content-end ">
        <span className="h6 bold">
          Total:{" "}
          {expenses.reduce((acc, exp) => (acc += exp.amount), 0).toFixed(2)}€
        </span>
      </div>
    </div>
  );
}
