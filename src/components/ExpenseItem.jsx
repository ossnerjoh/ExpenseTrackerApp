export default function ExpenseItem() {
  return (
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
  );
}
