import { paths } from "../data";

export default function LearningPaths() {
  return (
    <section className="container section center">
      <h2>Explore Diverse Learning Paths at Bytespace</h2>
      <p className="sub">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone.</p>
      <div className="paths">
        {paths.map((p) => (
          <div className="path" key={p}>
            <span className="path-icon" />
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}