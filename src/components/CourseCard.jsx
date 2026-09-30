import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <Link to={`/course/${course.id}`}>
        <div className="course-img" style={{ backgroundImage: `url(${course.img})` }}>
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </Link>
      <div className="course-title">
        <h3><Link to={`/course/${course.id}`}>{course.title}</Link></h3>
        <span className="rating">4.5 ★</span>
      </div>
      <p className="by">by <Link to="/creator">purepearl studio</Link></p>
      <div className="course-meta">
        <span className="level">Beginner</span>
        <span className="students">26+</span>
      </div>
      <p className="price"><b>$25</b>/lifetime</p>
    </div>
  );
}