export  function HeroSection() {
  return (
    <div style={{
      height: "75vh",
      background: "linear-gradient(120deg,#000,#111,#ff5e00)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0 50px"
    }}>
      <div>
        <h1 style={{ fontSize: "55px" }}>
          RACE INTO <br /> THE FUTURE
        </h1>
        <p style={{ color: "#ccc" }}>
          Explore Premium Hot Wheels Collection
        </p>

        <button style={{
          marginTop: "15px",
          padding: "12px 25px",
          border: "none",
          background: "#ff6a00",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          SHOP NOW
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1542362567-b07e54358753"
        style={{ width: "500px", borderRadius: "20px" }}
      />
    </div>
  );
}