import { useState } from "react";

function App() {
  // exemplos de aprendizado
  const nome = "Marcos";
  const a = 5;
  const b = 11;
  const soma = a + b;

  const [contador, setContador] = useState(0);

  return (
    <div style={{ fontFamily: "Arial", margin: 0, padding: 0 }}>
      
      {/* Cabeçalho */}
      <header style={{
        background: "#0f172a",
        color: "white",
        padding: "30px",
        textAlign: "center"
      }}>
        <h1>Marcos 🚀</h1>
        <p>Desenvolvedor Frontend em evolução</p>
      </header>

      {/* Seção principal */}
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

      {/* 🔥 NOVA SEÇÃO DE APRENDIZADO */}
      <section style={{
        padding: "40px",
        background: "#f8fafc",
        textAlign: "center"
      }}>
        <h2>Testes de aprendizado React 🧠</h2>

        <p>Meu nome é: <strong>{nome}</strong></p>

        <p>
          Soma: {a} + {b} = <strong>{soma}</strong>
        </p>

        <h3>Contador</h3>

        <p>Valor atual: {contador}</p>

        <button onClick={() => setContador(contador + 1)}>
          +1
        </button>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() => setContador(contador - 1)}
        >
          -1
        </button>
      </section>

      {/* Rodapé */}
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
