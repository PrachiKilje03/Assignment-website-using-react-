export default function Categories() {
  const categories = [
    "🏎 Racing Cars",
    "🚘 Sports Cars",
    "🚓 Police Cars",
    "🚙 SUVs",
    "🚚 Trucks",
    "🏁 Limited Edition"
  ];

  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        minHeight: "80vh",
        background: "#f0d5e5",
        color: "white"
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Categories</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              background: " rgba(235, 91, 34, 0.92)",
              padding: "25px",
              width: "220px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgb(243, 137, 17)",
              cursor: "pointer"
            }}
          >
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}