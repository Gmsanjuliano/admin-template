import { useState } from "react";
import AuthInput from "../components/auth/authInput";
import { IconWarning } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Authentication() {
  const { user, googleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "registration">("login");
  const [error, setError] = useState(null);

  function showError(msg: any, duraction = 5) {
    setError(msg);
    setTimeout(() => setError(null), duraction * 1000);
  }

  function submit() {
    if (mode === "login") {
      console.log("login");
      showError("Ocorreu um erro no login!");
    } else {
      console.log("cadastrar");
      showError("Ocorreu um erro no cadastro!");
    }
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          className="h-screen w-full object-cover "
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
        />
      </div>
      <div className="md:w-1/2 m-10 w-full lg:w-1/3">
        <h1 className="text-3xl font-bold mb-6">
          {mode === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>

        {error ? (
          <div
            className={`bg-red-400 text-white py-3 px-5 my-8 border-2 border-red-700 rounded-xl flex  items-center`}
          >
            {IconWarning}
            <span className="ml-2">{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          value={email}
          changeValue={setEmail}
          type="email"
          mandatory
        />
        <AuthInput
          label="Senha"
          value={password}
          changeValue={setPassword}
          type="password"
          mandatory
        />

        <button
          onClick={submit}
          className={`w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-4 py-3 mt-6`}
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={googleLogin}
          className={`w-full bg-red-600 hover:bg-red-500 text-white rounded-xl px-4 py-3`}
        >
          Entrar com o Google
        </button>

        {mode === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              href=""
              onClick={() => setMode("registration")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2"
            >
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já tem uma conta?
            <a
              href=""
              onClick={() => setMode("login")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2"
            >
              Entre com a sua conta
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
