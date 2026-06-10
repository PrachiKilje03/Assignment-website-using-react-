export default function Contact() {
  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        minHeight: "80vh",
        background: "#111",
        color: "white"
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>📞 Contact Us</h1>

      <p style={{ fontSize: "18px" }}>
        We'd love to hear from you!
      </p>

      <div
        style={{
          background: "#222",
          width: "350px",
          margin: "30px auto",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
        }}
      >
        <h3>Hot Wheels Store</h3>

        <p>📧 Email: hotwheels@gmail.com</p>

        <p>📱 Phone: +91 9876543210</p>

        <p>📍 Location: Mumbai, India</p>

        <button
          style={{
            background: "#ff6a00",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}