function App() {
  return (
    <div style={{ fontFamily: "Arial", margin: 0, padding: 0 }}>
      
      <header style={{
        background: "#0f172a",
        color: "white",
        padding: "30px",
        textAlign: "center"
      }}>
        <h1>Marcos🚀</h1>
        <p>Desenvolvedor Frontend em evolução</p>
      </header>

      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Bem-vindo ao meu site</h2>
        <p>Estou aprendendo React e criando projetos reais!</p>

        <button style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#22c55e",
          border: "none",
          color: "white",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Ver Projetos
        </button>
      </section>

      <footer style={{
        textAlign: "center",
        padding: "20px",
        background: "#f1f1f1"
      }}>
        <p>© 2026 Marcos Paulo</p>
      </footer>

    </div>
  );
}

export default App;