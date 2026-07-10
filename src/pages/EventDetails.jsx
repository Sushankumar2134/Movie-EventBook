import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BookingModal from "../components/BookingModal";
import PaymentModal from "../components/PaymentModal";
import ReviewCard from "../components/ReviewCard";
import SeatSelection from "../components/SeatSelection";
import events from "../data/events";
import reviews from "../data/reviews";
import { eventVenues, movieVenues } from "../data/venues";
import "../styles/details.css";

function EventDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isSeatOpen, setIsSeatOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [selectedVenue, setSelectedVenue] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const event = useMemo(() => events.find((entry) => String(entry.id) === String(id)), [id]);
    const eventReviews = event ? reviews[event.title] || [] : [];

    if (!event) {
        return (
            <div className="container">
                <button className="back-btn" type="button" onClick={() => navigate("/")}>
                    ← Back
                </button>
                <div className="event-details-section" style={{ display: "block" }}>
                    <h2>Event not found</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="event-details-section" style={{ display: "block" }}>
                <button className="back-btn" type="button" onClick={() => navigate("/")}>
                    ← Back
                </button>
                <div className="event-details-header">
                    <img src={event.image} alt={event.title} />
                    <div className="event-info">
                        <h2>{event.title}</h2>
                        <p>Category: {event.category}</p>
                        <div className="event-full-description">{event.description}</div>
                    </div>
                </div>

                <div className="event-gallery">
                    {event.gallery.map((image, index) => (
                        <img key={`${event.title}-${index}`} src={image} alt={`${event.title} ${index + 1}`} />
                    ))}
                </div>

                <button className="book-button" type="button" onClick={() => setIsBookingOpen(true)}>
                    Book Event
                </button>

                <div className="review-section" aria-live="polite">
                    <h4 className="review-title">Reviews for {event.title}</h4>
                    {eventReviews.map((review) => (
                        <ReviewCard key={`${review.name}-${review.text.slice(0, 12)}`} review={review} />
                    ))}
                </div>
            </div>

            <BookingModal
                open={isBookingOpen}
                title={event.title}
                venues={eventVenues[event.title] || movieVenues}
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
                title={`${event.title} at ${selectedVenue}`.trim()}
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

export default EventDetails;