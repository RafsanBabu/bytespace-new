export default function Growth() {
  return (
    <section className="soft-bg">
      <div className="container section split">
        <div>
          <h2>Your Path to Professional Growth Starts Here!</h2>
          <p className="sub left">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <div className="stats">
            <div><b>12K</b><span>Students</span></div>
            <div><b>70+</b><span>Courses</span></div>
            <div><b>16</b><span>Creators</span></div>
          </div>
        </div>
        <img src="/images/hero-student.png" alt="Student learning" className="split-img" />
      </div>

      <div className="container section split reverse">
        <img src="/images/girl.png" alt="Creator with tablet" className="split-img" />
        <div>
          <h2>Create &amp; Manage Courses Easily.</h2>
          <p><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="checks">
            <li>Share Your Expertise</li>
            <li>Monetize Your Passion</li>
            <li>Flexibility and Autonomy</li>
            <li>Build a Community</li>
          </ul>
        </div>
      </div>
    </section>
  );
}