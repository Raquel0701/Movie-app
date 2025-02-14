"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation"; 

const LoginPage = () => {

  const [email, setEmail] = useState("dianita-raquel@example.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const router = useRouter(); 


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

   
    if (email === "dianita-raquel@example.com" && password === "admin123") {
     
      router.push("/");  
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full p-4 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-md transform hover:scale-105"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">¿No tienes cuenta? <a href="#" className="text-blue-500 hover:underline">Regístrate</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
