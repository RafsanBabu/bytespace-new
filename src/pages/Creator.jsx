import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import CourseCard from "../components/CourseCard";
import { courses } from "../data";

export default function Creator() {
  const [following, setFollowing] = useState(false);

  return (
    <>
      <header className="blue-grid creator-hero">
        <Navbar />
        <div className="container">
          <div className="creator-top">
            <img src="/images/creator.jpg" alt="PurePearl Studio" className="creator-avatar" />
            <div>
              <h1>PurePearl Studio <span className="badge">Creator</span></h1>
              <p>Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <p className="creator-bio">
            Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!<br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>
          <div className="creator-actions">
            <div className="pills">
              <span className="pill">3 Products</span>
              <span className="pill">{following ? 13 : 12} Followers</span>
            </div>
            <button className="btn" onClick={() => setFollowing(!following)}>
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </header>

      <main className="container section">
        <FilterBar />
        <div className="course-grid">
          {courses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </main>

      <Footer />
    </>
  );
}