"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  const enviarDados = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    const dados = { idade: Number(idade), nome: nome };

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const resultado = await response.json();
      setData(resultado);
    } catch (erro) {
      console.error("Erro:", erro);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h2>Cadastro de Usuário</h2>

      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Idade:</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>

      <button onClick={enviarDados} disabled={loading}>
        {loading ? "Enviando..." : "Enviar Dados"}
      </button>

      <div>
        {error && <p>Houve um erro: {error}</p>}

        {data && (
          <div>
            <h3>Resposta do Servidor:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </main>
  );
}
