import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BookingModal from "../components/BookingModal";
import PaymentModal from "../components/PaymentModal";
import SeatSelection from "../components/SeatSelection";
import movies from "../data/movies";
import reviews from "../data/reviews";
import { movieVenues } from "../data/venues";
import ReviewCard from "../components/ReviewCard";
import rakshithShettyImage from "../assets/rakshith shetty.jpeg";
import rukminiVasanthImage from "../assets/rukmini vasant.jpeg";
import jpTuminadImage from "../assets/jp tuminad.jpeg";
import hemantRaoImage from "../assets/hemant rao sse.jpeg";
import "../styles/details.css";

const castByTitle = {
    "Kantara chapter 1": [
        { name: "Rishab Shetty", img: rakshithShettyImage },
        { name: "Rukmini Vasanth", img: rukminiVasanthImage },
        { name: "Kishore", img: jpTuminadImage },
        { name: "Achuth Kumar", img: hemantRaoImage }
    ],
    "Lokha-chapter 1": [
        { name: "Prabhas", img: rakshithShettyImage },
        { name: "Shruti Hassan", img: rukminiVasanthImage },
        { name: "Jagapathi Babu", img: jpTuminadImage },
        { name: "Prithviraj Sukumaran", img: hemantRaoImage }
    ],
    "The Conjuring:Last Rities": [
        { name: "Patrick Wilson", img: rakshithShettyImage },
        { name: "Vera Farmiga", img: rukminiVasanthImage },
        { name: "Julian Hilliard", img: jpTuminadImage },
        { name: "Sarah Hoffman", img: hemantRaoImage }
    ],
    "Madharasi": [
        { name: "Sai Dharam Tej", img: rakshithShettyImage },
        { name: "Rakul Preet Singh", img: rukminiVasanthImage },
        { name: "Venkatesh", img: jpTuminadImage },
        { name: "Pooja Hegde", img: hemantRaoImage }
    ],
    "Su from So": [
        { name: "Vijay Deverakonda", img: rakshithShettyImage },
        { name: "Rashmika Mandanna", img: rukminiVasanthImage },
        { name: "Samantha Ruth Prabhu", img: jpTuminadImage },
        { name: "Prakash Raj", img: hemantRaoImage }
    ]
};

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isSeatOpen, setIsSeatOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [selectedVenue, setSelectedVenue] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const movie = useMemo(() => movies.find((entry) => String(entry.id) === String(id)), [id]);
    const cast = movie ? castByTitle[movie.title] || [] : [];
    const movieReviews = movie ? reviews[movie.title] || [] : [];

    if (!movie) {
        return (
            <div className="container">
                <button className="back-btn" type="button" onClick={() => navigate("/")}>
                    ← Back
                </button>
                <div className="movie-details-section" style={{ display: "block" }}>
                    <h2>Movie not found</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="movie-details-section" style={{ display: "block" }}>
                <button className="back-btn" type="button" onClick={() => navigate("/")}>
                    ← Back
                </button>
                <div className="movie-details-header">
                    <img src={movie.image} alt={movie.title} />
                    <div className="movie-info">
                        <h2>{movie.title}</h2>
                        <p>Rating: {movie.rating}</p>
                        <p className="movie-description">{movie.description}</p>
                    </div>
                </div>

                {cast.length > 0 && (
                    <div className="cast-container">
                        <h3>Cast</h3>
                        <div className="cast-list">
                            {cast.map((member) => (
                                <div className="cast-member" key={member.name}>
                                    <img src={member.img} alt={member.name} />
                                    <p>{member.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <button className="book-button" type="button" onClick={() => setIsBookingOpen(true)} style={{ marginLeft: 10 }}>
                    Choose Show & Book
                </button>

                <div className="review-section" aria-live="polite">
                    <h4 className="review-title">Reviews for {movie.title}</h4>
                    {movieReviews.map((review) => (
                        <ReviewCard key={`${review.name}-${review.text.slice(0, 12)}`} review={review} />
                    ))}
                </div>
            </div>

            <BookingModal
                open={isBookingOpen}
                title={movie.title}
                venues={movieVenues}
                onClose={() => setIsBookingOpen(false)}
                onSelectTime={({ venueName, time }) => {
                    setSelectedVenue(venueName);
                    setSelectedTime(time);
                    setIsBookingOpen(false);
                    setIsSeatOpen(true);
                }}
            />

            <SeatSelection
                open={isSeatOpen}
                title={`${movie.title} at ${selectedVenue}`.trim()}
                timeLabel={`Time: ${selectedTime}`}
                onClose={() => setIsSeatOpen(false)}
                onConfirm={(seats) => {
                    if (!seats.length) {
                        alert("Please select at least one seat.");
                        return;
                    }

                    setIsSeatOpen(false);
                    setIsPaymentOpen(true);
                }}
            />

            <PaymentModal
                open={isPaymentOpen}
                onClose={() => setIsPaymentOpen(false)}
                onSelect={(method) => {
                    if (method.url) {
                        window.open(method.url, "_blank", "noopener,noreferrer");
                    }

                    setIsPaymentOpen(false);
                    alert("Payment simulated. Booking stored in demo (local).");
                    navigate("/");
                }}
            />
        </div>
    );
}

export default MovieDetails;