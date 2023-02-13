import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses }) {
  return (
    <div className="ExpensesList p-3">
      <h5>Deine Ausgaben</h5>
      {expenses.map((expense) => {
        return <ExpenseItem />;
      })}
    </div>
  );
}
