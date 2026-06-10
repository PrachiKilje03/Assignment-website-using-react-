export function Categories() {
  const categories = [
    {
      name: "🏎 Lamborghini",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500",
    },
  
    {
      name: "⚡ Bugatti",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500",
    },
    {
      name: "💪 Mustang",
      image:
        "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500",
    },
  ];

  return (
    <div
      style={{
        padding: "60px",
        background: "#111",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#ff6a00",
          marginBottom: "30px",
        }}
      >
        HOT WHEELS COLLECTION
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((car, index) => (
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
              src={car.image}
              alt={car.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <h3
              style={{
                padding: "15px",
                color: "#ff6a00",
              }}
            >
              {car.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}