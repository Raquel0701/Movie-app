"use client"; 

import { useParams, useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa"; 
import Navbar from "../../../components/Navbar"; 
import Footer from "../../../components/Footer"; 

const ReviewForm = ({ onSubmit }: { onSubmit: (review: string) => void }) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review.trim()) {
      onSubmit(review); 
      setReview(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Escribe tu reseña... "
        className="w-full p-2 border rounded-md"
        rows={4}
      />
      <button
        type="submit"
        className="mt-2 p-2 bg-blue-500 text-white rounded-md"
      >
        Publicar Reseña
      </button>
    </form>
  );
};

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [reviews, setReviews] = useState<string[]>([]); 
  const router = useRouter(); 

  useEffect(() => {
    if (!id) return; 

    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=8c75ae6f`
        );
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          setError("No se encontraron detalles de la película.");
        }
      } catch (err) {
        setError("Error al obtener los detalles de la película.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleReviewSubmit = (review: string) => {
    setReviews((prevReviews) => [review, ...prevReviews]); 
  };

  if (loading) return <div className="text-center">Cargando...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!movie)
    return <div className="text-center">No se encontró la película.</div>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <FaArrowLeft className="mr-2" /> Volver
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="max-w-sm rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
            <p className="text-lg text-gray-700 mb-4">{movie.Plot}</p>
            <p className="text-lg text-gray-500"><strong>Año:</strong> {movie.Year}</p>
            <p className="text-lg text-gray-500"><strong>Género:</strong> {movie.Genre}</p>
            <p className="text-lg text-gray-500"><strong>Duración:</strong> {movie.Runtime}</p>
            <p className="text-lg text-gray-500"><strong>Calificación:</strong> {movie.imdbRating}</p>
          </div>
        </div>

        <ReviewForm onSubmit={handleReviewSubmit} />

        <div>
          <h3 className="text-lg font-bold mt-6">Reseñas:</h3>
          {reviews.length > 0 ? (
            <ul className="mt-4 space-y-4">
              {reviews.map((review, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  {review}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay reseñas aún.</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MovieDetailPage;
