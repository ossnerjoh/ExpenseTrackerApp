export default function InputArea() {
  return (
    <div className="InputArea card mb-3 py-2">
      <div className="card-body">
        <div className="input-group">
          <input type="date" name="date" className="form-control" />
          <input
            type="text"
            name="title"
            placeholder="Neue Ausgabe"
            className="form-control"
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
  );
}
