import "./styles.css";

export default function App() {
  return (
    <div classname="card">
      <div classname="card-header">My App</div>
      <div classname="card-body">
        <h5>Überschrift</h5>
        <div classname="expenseItem card">
          <div className="input-group mb-3">
            <input type="date" name="date" class="form-control"/>
            <input type="text" name="title" placeholder="Neue Ausgabe" class="form-control"/>
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
    </div>

  );
}
