function Home() {
  return (
    <div style={styles.container}>
      <h2 style={styles.subtitle}>Welcome to my space</h2>

      <h1 style={styles.headline}>Building, learning, evolving.</h1>

      <p style={styles.quote}>
        “Habits are the compound interest of self-improvement.”
        <br />
        <span style={styles.author}>— James Clear</span>
      </p>

      <a
        href="https://mtds20.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        View my portfolio →
      </a>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0e0e0e",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
    padding: "0 20px",
  },

  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.6,
    marginBottom: "10px",
    letterSpacing: "1px",
  },

  headline: {
    fontSize: "3rem",
    marginBottom: "30px",
    fontWeight: "700",
    maxWidth: "700px",
    lineHeight: "1.1",
  },

  quote: {
    fontSize: "1.4rem",
    maxWidth: "600px",
    fontStyle: "italic",
    opacity: 0.85,
    marginBottom: "50px",
    lineHeight: "1.5",
  },

  author: {
    fontSize: "1.1rem",
    opacity: 0.5,
  },

  button: {
    padding: "14px 28px",
    backgroundColor: "#ffffff15",
    border: "1px solid #ffffff40",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    transition: "0.3s",
  },
};

export default Home;
