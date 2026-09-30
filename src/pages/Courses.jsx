import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import CourseCard from "../components/CourseCard";
import { courses, categories } from "../data";

// the design shows 18 cards, so I repeat the 6 courses 3 times
const allCourses = [0, 1, 2].flatMap((round) =>
  courses.map((c) => ({ ...c, key: `${round}-${c.id}` }))
);

export default function Courses() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("Featured");
  const [page, setPage] = useState(1);

  const shown = allCourses.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <header className="blue-grid search-hero">
        <Navbar />
        <div className="container center">
          <h1>Find Your Next Course</h1>
          <form className="search" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="btn">Courses ⌄</button>
          </form>
        </div>
      </header>

      <main className="container section">
        <FilterBar />
        <div className="chips left">
          {categories.slice(0, 9).map((c) => (
            <button key={c} className={c === active ? "chip active" : "chip"} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>

        {shown.length === 0 && <p className="center">No courses found.</p>}
        <div className="course-grid">
          {shown.map((c) => <CourseCard key={c.key} course={c} />)}
        </div>

        <div className="pagination">
          <button onClick={() => setPage(Math.max(1, page - 1))}>‹</button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} className={n === page ? "current" : ""} onClick={() => setPage(n)}>{n}</button>
          ))}
          <button onClick={() => setPage(Math.min(5, page + 1))}>›</button>
        </div>
      </main>

      <Footer />
    </>
  );
}