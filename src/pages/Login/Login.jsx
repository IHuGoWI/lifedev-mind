import { useEffect, useState } from "react";
import { useAuthentication } from "../../Hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    setError("");
    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <>
      <div>
        <div className='py-40 container mx-auto flex flex-col gap-8 min-h-screen'>
          <div className="w-xl py-10 mx-auto rounded-xl shadow-xl">
            <h1 className="text-3xl text-center font-bold">Entrar</h1>
            <p className="text-base text-center">Faça login em nossa plataforma de desenvolvedores</p>
            <form className="flex flex-col gap-8 w-xl mx-auto p-10" onSubmit={handlerSubmit}>
              <label className="flex flex-col gap-2">
                <span className="font-bold">Email</span>
                <input className="p-2 border-1 border-zinc-800 rounded-sm"
                  type="email"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
              <label className="flex flex-col">
                <span className="font-bold">Senha: </span>
                <input className="p-2 border-1 border-zinc-800 rounded-sm"
                  type="password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </label>
              {!loading && <button className="p-2 bg-green-500 rounded-sm cursor-pointer hover:bg-green-600 transition duration-300">Entrar</button>}
              {loading && (
                <button className="btn" disabled>
                  Aguarde...
                </button>
              )}
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
