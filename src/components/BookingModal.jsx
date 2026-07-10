import { useMemo, useState } from "react";

import "../styles/details.css";

function BookingModal({ open, title, venues, onClose, onSelectTime }) {
  const [selectedVenue, setSelectedVenue] = useState(null);

  const visibleVenues = useMemo(() => venues || [], [venues]);

  if (!open) {
    return null;
  }

  return (
    <div className="modal" aria-hidden={!open} style={{ display: "flex" }}>
      <div className="modal-content">
        <span className="close-btn" role="button" aria-label="Close" onClick={onClose}>
          ×
        </span>
        <h3>{title}</h3>
        <p>Select your venue and show time:</p>
        <div>
          {visibleVenues.map((venue) => (
            <div
              className={`venue-option ${selectedVenue === venue.name ? "selected" : ""}`.trim()}
              key={venue.name}
              onClick={() => setSelectedVenue(venue.name)}
            >
              <span>{venue.name}</span>
              <span className="show-times">
                {venue.times.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className="show-time-btn"
                    onClick={(event) => {
                      event.stopPropagation();
                      if (selectedVenue !== venue.name) {
                        return;
                      }
                      onSelectTime({ venueName: venue.name, time });
                    }}
                  >
                    {time}
                  </button>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingModal;