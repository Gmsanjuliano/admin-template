import { useState } from "react";
import AuthInput from "../components/auth/authInput";

export default function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "registration">("login");

  function submit() {
    if (mode === "login") {
      console.log("login");
    } else {
      console.log("cadastrar");
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
        <h1 className="text-3xl font-bold mb-10">
          {mode === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
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
          onClick={submit}
          className={`w-full bg-red-600 hover:bg-red-500 text-white rounded-xl px-4 py-3`}
        >
          Entrar com o Google
        </button>
      </div>
    </div>
  );
}
