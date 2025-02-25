import { useState } from "react";
import "./style.css";
function App() {
  const [name, setName] = useState(""); 
  const [cep, setCep] = useState("");

  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col items-center p-4">
        <div className="flex flex-col border-2 border-white rounded-md p-4 gap-4">
          <h1 className="text-white text-4xl font-bold">Cadastro de usuário</h1>
          <div className="flex flex-col gap-2">
            <form action="POST" className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white">
                Nome:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-white rounded-md p-2"
              />
              <label htmlFor="email" className="text-white">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white rounded-md p-2"
              />
              <label htmlFor="text" className="text-white">
                CEP:
              </label>
              <input
                type="text"
                name="cep"
                id="cep"
                className="bg-white rounded-md p-2"
              />
              <label htmlFor="text" className="text-white">
                Rua:
              </label>
              <input
                type="text"
                name="rua"
                id="rua"
                className="bg-white rounded-md p-2"
              />
              <label htmlFor="text" className="text-white">
                Bairro:
              </label>
              <input
                type="text"
                name="bairro"
                id="bairro"
                className="bg-white rounded-md p-2"
              />
              <label htmlFor="text" className="text-white">
                Cidade:
              </label>
              <input
                type="text"
                name="cidade"
                id="cidade"
                className="bg-white rounded-md p-2"
              />
              <label htmlFor="text" className="text-white">
                Estado:
              </label>
              <input
                type="text"
                name="estado"
                id="estado"
                className="bg-white rounded-md p-2"
              />
            </form>
            <button className="bg-white rounded-md p-2 mt-2 hover:bg-blue-700 hover:text-white text-black font-bold">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
