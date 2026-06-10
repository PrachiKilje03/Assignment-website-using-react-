export default function Products() {
  const products = [
    {
      name: "🏎 Lamborghini Aventador",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500",
    },
    {
      name: "🐎 Ferrari F8",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500",
    },
    {
      name: "⚡ Bugatti Chiron",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500",
    },
    

  ];

  return (
    <div
      style={{
        padding: "50px",
        background: "#111",
        color: "white",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#ff6a00" }}>🔥 Hot Wheels Products</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              background: "#222",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{product.name}</h3>
              <p style={{ color: "#ff6a00" }}>{product.price}</p>

              <button
                style={{
                  background: "#ff6a00",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}