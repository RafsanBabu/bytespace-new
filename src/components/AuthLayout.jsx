import { Link } from "react-router-dom";

export default function AuthLayout({ small, title, children, bottom }) {
  return (
    <main className="blue-grid auth">
      <div className="container auth-wrap">
        <div className="auth-left">
          <Link to="/" className="logo"><span className="logo-mark">b</span></Link>
          <h3>{title}</h3>
          <p>{bottom}</p>
        </div>
        <div className="auth-card">
          <span className="small-blue">{small}</span>
          {children}
        </div>
      </div>
    </main>
  );
}