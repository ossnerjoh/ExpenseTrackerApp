import { useState } from "react";

export default function InputArea({ addItem }) {
  const today = new Date().toISOString().substring(0, 10);
  const [newExpense, setNewExpense] = useState({
    date: today,
    title: "",
    category: "Freizeit",
    amount: ""
  });

  function handleChange(e) {
    let { name, value } = e.target;

    setNewExpense((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
    console.log(newExpense);
  }

  return (
    <div className="InputArea card mb-3 py-2">
      <div className="card-body">
        <div className="input-group">
          <input
            type="date"
            onChange={handleChange}
            value={newExpense.date}
            name="date"
            className="form-control"
          />
          <input
            type="text"
            onChange={handleChange}
            value={newExpense.title}
            name="title"
            placeholder="Neue Ausgabe"
            className="form-control"
          />
          <select
            value={newExpense.category}
            onChange={handleChange}
            className="form-select"
            name="category"
          >
            <option value={null}>Kategorie</option>
            <option value="Lebensmittel">Lebensmittel</option>
            <option value="Freizeit">Freizeit</option>
            <option value="Gesundheit">Gesundheit</option>
          </select>
          <input
            type="text"
            name="amount"
            onChange={handleChange}
            value={newExpense.amount}
            step="any"
            // pattern="^[0-9]*.[0-9]{2}$"
            placeholder="Betrag"
            className="form-control"
          />
          <button
            onClick={() => {
              addItem(newExpense);
            }}
            className="btn btn-dark"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
