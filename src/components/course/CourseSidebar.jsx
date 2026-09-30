import { Link } from "react-router-dom";
import { lessonPreview, includes } from "../../data";

export default function CourseSidebar() {
  return (
    <aside className="sidebar">
      <h3>112 Lessons (24 hours)</h3>
      <ul className="lesson-preview">
        {lessonPreview.map((l) => (
          <li key={l.n}>
            <span className="num">{l.n}</span>
            <span className="ltitle">{l.title}</span>
            <span className="time">{l.time}</span>
          </li>
        ))}
      </ul>
      <p className="muted">99 more videos</p>
      <p className="muted push">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <p className="big-price"><b>$25</b>/lifetime</p>
      <button className="btn full">Enroll Now</button>

      <h3 className="inc-title">This course include</h3>
      <ul className="includes">
        {includes.map((i) => <li key={i}>{i}</li>)}
      </ul>

      <div className="mini-creator">
        <img src="/images/creator-small.jpg" alt="PurePearl Studio" />
        <div><b>PurePearl Studio</b><br /><span className="muted">Professional Creator</span></div>
      </div>
      <p className="muted push">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <Link to="/creator" className="outline-btn small">See Full Profile</Link>
    </aside>
  );
}