export  function Newsletter() {
  return (
    <div style={{
      background: "#ff6a00",
      padding: "40px",
      textAlign: "center",
      color: "white"
    }}>
      <h2>SUBSCRIBE FOR UPDATES</h2>

      <input placeholder="Enter email"
        style={{ padding: "10px", border: "none", borderRadius: "5px" }} />

      <button style={{
        marginLeft: "10px",
        padding: "10px 15px",
        background: "black",
        color: "white",
        border: "none"
      }}>
        Subscribe
      </button>
    </div>
  );
}