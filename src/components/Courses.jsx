import { useState } from "react";
import CourseCard from "./CourseCard";
import { courses, categories } from "../data";

export default function Courses() {
  const [active, setActive] = useState("Featured");

  return (
    <section id="courses" className="container section center">
      <h2>Discover Your Passion,<br />Build Your Skills</h2>
      <p className="sub">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
      <div className="chips">
        {categories.map((c) => (
          <button key={c} className={c === active ? "chip active" : "chip"} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>
      <div className="course-grid">
        {courses.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>
    </section>
  );
}