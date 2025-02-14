"use client";  

import { FaFilm, FaStar, FaSearch, FaUserAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">¡Bienvenido a Movie DRDT!</h1>
          <p className="text-xl text-gray-500">Explora, reseña y disfruta de todas tus películas favoritas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="text-4xl text-blue-600 mb-4">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Búsqueda de Películas</h3>
            <p className="text-gray-500">
              Encuentra películas rápidamente por título, año o género.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaStar />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Calificación y Reseñas</h3>
            <p className="text-gray-500">
              Escribe y lee reseñas de películas. ¡Tu opinión importa!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="text-4xl text-green-600 mb-4">
              <FaFilm />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Películas Populares</h3>
            <p className="text-gray-500">
              Descubre las películas más vistas y recomendadas por la comunidad.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="text-4xl text-purple-600 mb-4">
              <FaUserAlt />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Perfil de Usuario</h3>
            <p className="text-gray-500">
              Accede a tu perfil para ver y gestionar tus reseñas y películas favoritas.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lo que puedes hacer en Movie DRDT</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora, reseña y comparte tus películas favoritas con nuestra comunidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
