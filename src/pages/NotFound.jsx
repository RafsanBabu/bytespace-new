import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <div className="blue-grid notfound">
        <Navbar />
        <div className="container center">
          <div className="big404">404</div>
          <h1>The page you are looking for doesn't exist</h1>
          <p>Try to use a correct url or go back to homepage to start again</p>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}