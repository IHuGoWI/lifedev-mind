import { useState } from "react";

function CriarUsuario() {
  // Estado local para armazenar dados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados do usuário:", { nome, email, senha });

    // Limpa os campos
    setNome("");
    setEmail("");
    setSenha("");

    alert("Usuário criado com sucesso!");
  };

  return (
    <div>
      <div className="py-40 container mx-auto flex flex-col gap-8 min-h-screen">
        <div className="w-xl py-10 mx-auto rounded-xl shadow-xl">
          <h1 className="text-3xl text-center font-bold">Criação de usuário</h1>
          <form className="flex flex-col gap-8 w-xl mx-auto p-10" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input className="p-2 border-1 w-full border-zinc-800 rounded-sm"
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input className="p-2 border-1 w-full border-zinc-800 rounded-sm"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="senha">Senha:</label>
              <input className="p-2 border-1 w-full border-zinc-800 rounded-sm"
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button className="p-2 bg-green-500 rounded-sm cursor-pointer hover:bg-green-600 transition duration-300" type="submit">Criar Usuário</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CriarUsuario;
