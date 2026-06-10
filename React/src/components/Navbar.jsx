import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      background: "#0d0d0d",
      color: "white",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 5px 20px rgba(255, 0, 0, 0.5)"
    }}>
      <h2 style={{ color: "#ec6606" }}>🔥 Hot Wheels</h2>

      <div style={{ display: "flex", gap: "50px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/products">Products</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/categories">Categories</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}