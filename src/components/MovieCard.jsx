import { useNavigate } from "react-router-dom";

import "../styles/moviecard.css";

function MovieCard({ movie, onBook }) {
    const navigate = useNavigate();

    return (
        <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
            <div className="short-desc">{movie.description}</div>
            <span className="rating">{movie.rating}</span>
            <button
                className="book-button"
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onBook(movie);
                }}
            >
                Book
            </button>
        </div>
    );
}

export default MovieCard;