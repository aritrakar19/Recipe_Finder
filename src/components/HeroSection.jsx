import React from "react";

const HeroSection = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Find the perfect recipe</h1>
        {/* <p style={styles.subtitle}>Find the perfect recipe for any occasion.</p> */}
      </div>
    </div>
  );
};

const styles = {
  hero: {
    backgroundImage: "url('https://swsphn.com.au/wp-content/uploads/2022/04/eating-healthy.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px", // Adjust height if needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  overlay: {
    backgroundColor: "#ff5757",
    padding: "20px",
    borderRadius: "10px",
  },
  title: {
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
    margin: 0,
  },
  subtitle: {
    color: "#ddd",
    marginTop: "10px",
    fontSize: "16px",
  },
};

export default HeroSection;
