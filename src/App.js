import { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import InputArea from "./components/InputArea";
import { dummyExpenses } from "./data/dummyExpenses";
import "./styles.css";

export default function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  function deleteItem(id) {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  }
  function addItem(newExpense) {
    const newId = expenses[expenses.length - 1].id + 1;
    newExpense.amount = parseFloat(newExpense.amount);
    console.log(newId);

    setExpenses([
      ...expenses,
      {
        id: newId,
        ...newExpense
      }
    ]);
    console.log(expenses);
  }

  return (
    <div className=" App card">
      <div className="card-header">ExpenseTrackerApp</div>
      <div className="card-body">
        <InputArea addItem={addItem} />
        <ExpensesList expenses={expenses} deleteItem={deleteItem} />
      </div>
    </div>
  );
}
