export default function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filter-left">
        <button className="outline-btn">Filter</button>
        <button className="outline-btn">Level</button>
        <button className="outline-btn">Category</button>
      </div>
      <button className="outline-btn">Most relevant</button>
    </div>
  );
}