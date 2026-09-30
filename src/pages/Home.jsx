import Hero from "../components/Hero";
import Courses from "../components/Courses";
import LearningPaths from "../components/LearningPaths";
import Growth from "../components/Growth";
import CreatorCTA from "../components/CreatorCTA";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="logos container">
        {[1, 2, 3, 4, 5].map((n) => <span key={n}>Logoipsum</span>)}
      </div>
      <Courses />
      <LearningPaths />
      <Growth />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </>
  );
}