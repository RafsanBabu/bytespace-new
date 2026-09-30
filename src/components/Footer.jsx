const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-news">
          <div className="logo dark"><span className="logo-mark">b</span> ByteSpace</div>
          <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <form className="news-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Search</button>
          </form>
          <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
        </div>
        <div className="footer-cols">
          {columns.map((col, i) => (
            <ul key={i}>
              {col.map((item) => <li key={item}><a href="#">{item}</a></li>)}
            </ul>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <span className="legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></span>
      </div>
    </footer>
  );
}