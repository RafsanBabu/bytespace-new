import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseSidebar from "../components/course/CourseSidebar";
import AboutTab from "../components/course/AboutTab";
import LessonsTab from "../components/course/LessonsTab";
import ReviewsTab from "../components/course/ReviewsTab";

const tabs = [
  { key: "about", label: "About" },
  { key: "lessons", label: "Lessons" },
  { key: "reviews", label: "Reviews" },
];

export default function CourseDetails() {
  const [tab, setTab] = useState("about");

  return (
    <>
      <header className="blue-grid course-top">
        <Navbar />
        <div className="container">
          <div className="course-head">
            <div>
              <h1>Build Digital Asset: A Comprehensive Guide</h1>
              <h4>Unlock the Power of Digital Creation with Expert Guidance</h4>
              <p className="by-line">by <Link to="/creator">purepearl studio</Link></p>
              <div className="pills">
                <span className="pill">Intermediate</span>
                <span className="pill">★ 4.8 (172 reviews)</span>
                <span className="pill">199 Students</span>
              </div>
            </div>
            <button className="btn">Share</button>
          </div>

          <div className="course-grid2">
            <div className="video">
              <img src="/images/course-video.jpg" alt="Course preview" />
              <div className="play">▶</div>
            </div>
            <CourseSidebar />
          </div>
        </div>
      </header>

      <main className="container course-body">
        <div className="tabs">
          {tabs.map((t) => (
            <button key={t.key} className={tab === t.key ? "chip active" : "chip"} onClick={() => setTab(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
        {tab === "about" && <AboutTab />}
        {tab === "lessons" && <LessonsTab />}
        {tab === "reviews" && <ReviewsTab />}
      </main>

      <Footer />
    </>
  );
}