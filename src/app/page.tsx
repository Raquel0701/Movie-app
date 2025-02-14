"use client"; 

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Movie = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
};

const Page = () => {
  const [query, setQuery] = useState<string>(""); 
  const [movies, setMovies] = useState<Movie[]>([]); 
  const [error, setError] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(false); 

  const movieTitles = [
    "Inception",
    "The Dark Knight",
    "Avatar",
    "Titanic",
    "The Matrix",
    "Avengers: Endgame",
    "The Godfather",
    "Forrest Gump",
    "Gladiator",
    "The Shawshank Redemption",
  ];

  const getRandomMovieTitle = () => {
    const randomIndex = Math.floor(Math.random() * movieTitles.length);
    return movieTitles[randomIndex];
  };

  const fetchMovies = async (searchQuery: string) => {
    setLoading(true); 
    setError(""); 

    try {
      
      const queryToSearch = searchQuery || getRandomMovieTitle();

      const response = await axios.get<{ Search: Movie[]; Response: string }>(
        `https://www.omdbapi.com/?s=${queryToSearch}&apikey=8c75ae6f`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setError("No se encontraron resultados.");
      }
    } catch (err) {
      setError("Error al realizar la búsqueda.");
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);
  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto p-4 mt-16"> 
        <div className="m-4">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">¡Encuentra tu película favorita!</h3>
          <input
            type="text"
            className="p-2 border rounded-md w-full"
            placeholder="Buscar películas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {loading && <p className="text-center">Cargando...</p>}

        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && movies.length === 0 && (
          <p className="text-center">No se han encontrado películas.</p>
        )}

        <div className="h-[60vh] overflow-y-scroll">
          {!loading && !error && movies.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {movies.map((movie) => (
                <div
                  key={movie.imdbID}
                  className="border p-4 rounded-md shadow-md"
                >
                  <Link href={`/movie/${movie.imdbID}`}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="w-full h-64 object-cover mb-4"
                    />
                    <h2 className="text-lg font-semibold">{movie.Title}</h2>
                    <p>{movie.Year}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Page;
