import "./styles.css";

export default function App() {
  return (
    <div className=" App card">
      <div className="card-header">ExpenseTrackerApp</div>
      <div className="card-body">
        {/* InputArea */}
        <div className="InputArea card mb-3 py-2">
          <div className="card-body">
            <div className="input-group">
              <input type="date" name="date" class="form-control" />
              <input
                type="text"
                name="title"
                placeholder="Neue Ausgabe"
                class="form-control"
              />
              <select className="form-select" name="category">
                <option selected>Kategorie</option>
                <option value={1}>Lebensmittel</option>
                <option value={2}>Freizeit</option>
                <option value={3}>Gesundheit</option>
              </select>
              <button className="btn btn-dark">+</button>
            </div>
          </div>
        </div>

        {/* List of Expenses */}
        <div className="ExpensesList p-3">
          <h5>Deine Ausgaben</h5>
          <div className="expense-item card p-1 border-dark mb-1">
            <div className="row">
              <div className="col-3 date">Date</div>
              <div className="col-4 title">Title</div>
              <div className="col-4 category">Category</div>
              <div className="col-1">
                <button className="btn btn-danger btn-sm">-</button>
              </div>
            </div>
          </div>
          <div className="expense-item card p-2 border-dark mb-1">
            <div className="row">
              <div className="col-4 date">Date</div>
              <div className="col title">Title</div>
              <div className="col-4 category">Category</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
