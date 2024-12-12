import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Top Section */}
      <div style={styles.topSection}>
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>About Us</h4>
          <p style={styles.text}>
            Discover delicious recipes from around the world and bring your cooking skills to the next level with Food Recipe Finder.
          </p>
        </div>
        {/* <div style={styles.column}>
          <h4 style={styles.columnTitle}>Quick Links</h4>
          <ul style={styles.linksList}>
            <li style={styles.linkItem}><a href="/" style={styles.link}>Home</a></li>
            <li style={styles.linkItem}><a href="/about" style={styles.link}>About</a></li>
            <li style={styles.linkItem}><a href="/contact" style={styles.link}>Contact</a></li>
          </ul>
        </div> */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.icon}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" style={styles.icon}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" style={styles.icon}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={styles.bottomSection}>
        <p style={styles.copyText}>
          &copy; {new Date().getFullYear()} Food Recipe Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
    padding: "20px 0",
    borderBottom: "1px solid #555",
  },
  column: {
    flex: "1 1 300px",
    margin: "10px",
    textAlign: "left",
  },
  columnTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.5",
  },
  linksList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  linkItem: {
    marginBottom: "5px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s",
  },
  linkHover: {
    color: "#ff5757",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  icon: {
    color: "white",
    fontSize: "20px",
    transition: "color 0.3s",
  },
  iconHover: {
    color: "#ff5757",
  },
  bottomSection: {
    marginTop: "20px",
  },
  copyText: {
    fontSize: "14px",
    color: "#aaa",
  },
};

export default Footer;
