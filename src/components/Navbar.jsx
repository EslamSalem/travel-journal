import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/globe.png" className="logo-img" />
        <h3 className="logo-title">My Travel Journal</h3>
      </div>
    </nav>
  );
}
