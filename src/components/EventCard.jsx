import { useNavigate } from "react-router-dom";

import "../styles/eventcard.css";

function EventCard({ event, onBook }) {
  const navigate = useNavigate();

  return (
 <div
  className="event-card"
  onClick={() => navigate(`/event/${event.id}`)}
  role="button"
>
      <img src={event.image} alt={event.title} className="event-card-img" />
      <p>{event.title}</p>
      <div className="short-desc">{event.description}</div>
      <span className="rating">{event.rating}</span>
      <button
        className="book-button"
        type="button"
        onClick={(eventClick) => {
          eventClick.stopPropagation();
          onBook(event);
        }}
      >
        Book
      </button>
    </div>
  );
}

export default EventCard;