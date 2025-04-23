import { useEffect, useState } from "react";
import { useAuthentication } from "../../Hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div>
      <div className='py-40 container mx-auto flex flex-col gap-8 min-h-screen'>
        <div className="w-xl py-10 mx-auto rounded-xl shadow-xl">
          <h1 className="text-3xl text-center font-bold">Cadastre-se</h1>
          <p className="text-base text-center">Crie seu usuário e compartilhe suas histórias</p>
          <form className="flex flex-col gap-8 w-xl mx-auto p-10" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2">
              <span className="font-bold">Nome:</span>
              <input className="p-2 border-1 border-zinc-800 rounded-sm"
                type="text"
                name="displayName"
                required
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-bold">Email:</span>
              <input className="p-2 border-1 border-zinc-800 rounded-sm"
                type="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-bold">Senha:</span>
              <input className="p-2 border-1 border-zinc-800 rounded-sm"
                type="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-bold">Confirme a senha:</span>
              <input className="p-2 border-1 border-zinc-800 rounded-sm"
                type="password"
                name="confirmPassword"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </label>
            {!loading && <button className="p-2 bg-green-500 rounded-sm cursor-pointer hover:bg-green-600 transition duration-300">Cadastre-se</button>}
            {loading && (
              <button className="btn" disabled>
                Aguarde...
              </button>
            )}
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
