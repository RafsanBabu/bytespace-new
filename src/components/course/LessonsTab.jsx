import { modules } from "../../data";

export default function LessonsTab() {
  return (
    <div>
      <h3>Explore the Modules</h3>
      <p className="para">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>

      <h4>Lesson List</h4>
      {modules.map((m) => (
        <div className="module" key={m.title}>
          <div className="module-icon">▶</div>
          <div>
            <b>{m.title}</b>
            <p className="para">{m.text}</p>
          </div>
        </div>
      ))}

      <h3>Lesson Content</h3>
      <p className="para">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>

      <h3>Lesson Progress Tracking</h3>
      <p className="para">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
      <div className="progress-box">
        <small>Learning Progress</small>
        <strong>55%</strong>
        <div className="bar big"><div style={{ width: "55%" }} /></div>
      </div>
    </div>
  );
}