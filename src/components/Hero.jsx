import Navbar from "./Navbar";

export default function Hero() {
  return (
    <header className="blue-grid hero">
      <Navbar />

      <div className="container hero-body">
        <div className="hero-intro">
          <h1>
            Get Access to Hundreds
            <span>Courses Available</span>
          </h1>
          <p>
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form className="hero-search" onSubmit={(e) => e.preventDefault()}>
            <span className="search-icon">⌕</span>
            <input type="text" placeholder="Course, topic, creator" aria-label="Course search" />
            <button type="submit" className="btn hero-btn">Search</button>
          </form>
        </div>

        <div className="hero-art" aria-label="Hero visual with student and cards">
          <div className="lime-backdrop" />
          <div className="shape left-swoosh" />
          <div className="shape right-swoosh" />
          <div className="shape left-loop" />
          <div className="shape right-loop" />

          <div className="student-wrap">
            <img src="/images/girl.png.png" alt="Student holding laptop" />
          </div>

          <div className="float-card card-left">
            <strong>UI/UX Design</strong>
            <span>200 Courses • 1000+ Students</span>
          </div>

          <div className="float-card card-right">
            <span>Learning Progress</span>
            <strong>55%</strong>
            <div className="progress-bar">
              <div style={{ width: "55%" }} />
            </div>
          </div>

          <div className="float-card card-bottom">
            <strong>Happy Students</strong>
            <div className="mini-avatars">
              <span />
              <span />
              <span />
            </div>
            <small>4.5 (240) ★</small>
          </div>
        </div>
      </div>
    </header>
  );
}