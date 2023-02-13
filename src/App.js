import { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import InputArea from "./components/InputArea";
import { dummyExpenses } from "./data/dummyExpenses";
import "./styles.css";

console.log(dummyExpenses);

export default function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  return (
    <div className=" App card">
      <div className="card-header">ExpenseTrackerApp</div>
      <div className="card-body">
        <InputArea />
        <ExpensesList expenses={expenses} />
      </div>
    </div>
  );
}
