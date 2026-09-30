import { reviews } from "../data";

export default function Testimonials() {
  return (
    <section className="soft-bg">
      <div className="container section">
        <div className="split">
          <h2>Discover What Our Community Is Saying</h2>
          <p className="sub left">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p>
        </div>
        <div className="review-grid">
          {reviews.map((r) => (
            <div className="review" key={r.name}>
              <img src={r.img} alt={r.name} />
              <h4>{r.name}</h4>
              <span>{r.role}</span>
              <p>"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}