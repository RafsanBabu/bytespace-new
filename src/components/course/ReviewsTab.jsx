import { useState } from "react";
import { ratingBars, reviewList } from "../../data";

export default function ReviewsTab() {
  const [filter, setFilter] = useState("all");
  const total = ratingBars.reduce((a, b) => a + b, 0);
  const shown = filter === "all" ? reviewList : reviewList.filter((r) => r.rating === filter);

  return (
    <div>
      <h3>What Learners Are Saying</h3>
      <p className="para">Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>

      <div className="rating-box">
        <div className="rating-score"><small>Ratings</small><strong>4.7</strong></div>
        <div className="rating-rows">
          {ratingBars.map((count, i) => (
            <div className="rating-row" key={i}>
              <div className="bar"><div style={{ width: `${(count / total) * 100}%` }} /></div>
              <span className="stars">★★★★★</span>
              <span className="count">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <h4>Individual Reviews:</h4>
      <div className="chips left">
        <button className={filter === "all" ? "chip active" : "chip"} onClick={() => setFilter("all")}>All rating</button>
        {[5, 4, 3, 2, 1].map((n) => (
          <button key={n} className={filter === n ? "chip active" : "chip"} onClick={() => setFilter(n)}>★ {n}</button>
        ))}
      </div>

      {shown.length === 0 && <p className="para">No reviews with this rating yet.</p>}
      {shown.map((r) => (
        <div className="review-item" key={r.name}>
          <div className="review-top">
            <img src={r.img} alt={r.name} />
            <div><b>{r.name}</b><br /><span className="muted">{r.role}</span></div>
            <span className="muted ago">a year ago</span>
          </div>
          <div className="stars dark">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
          <p className="para">{r.text}</p>
        </div>
      ))}
    </div>
  );
}