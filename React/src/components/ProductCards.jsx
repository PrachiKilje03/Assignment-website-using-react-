export default function ProductCards() {

  const products = [
    {
      name: "Ferrari F8",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500",
    },
    {
      name: "Lamborghini",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500",
    },
    {
      name: "Mustang GT",
      price: "₹399",
      image:
        "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500",
    },
  ];

  return (
    <div
      style={{
        padding: "50px",
        background: "#fa5959",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Featured Products</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              background: "#3b3737",
              width: "250px",
              borderRadius: "12px",
              overflow: "hidden",
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
              <p>{product.price}</p>

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