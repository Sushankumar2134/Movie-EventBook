import { useMemo, useState } from "react";

import "../styles/details.css";

function SeatSelection({ open, title, timeLabel, onClose, onConfirm }) {
  const bookedSeats = useMemo(() => new Set(["2-5", "3-8", "4-1", "4-2", "5-6", "5-7"]), []);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = useMemo(() => {
    const list = [];

    for (let row = 1; row <= 5; row += 1) {
      for (let column = 1; column <= 10; column += 1) {
        list.push(`${row}-${column}`);
      }
    }

    return list;
  }, []);

  if (!open) {
    return null;
  }

  const toggleSeat = (seatId) => {
    if (bookedSeats.has(seatId)) {
      return;
    }

    setSelectedSeats((current) =>
      current.includes(seatId) ? current.filter((seat) => seat !== seatId) : [...current, seatId]
    );
  };

  return (
    <div className="modal" aria-hidden={!open} style={{ display: "flex" }}>
      <div className="modal-content">
        <span className="close-btn" role="button" aria-label="Close" onClick={onClose}>
          ×
        </span>
        <h3>{title}</h3>
        <p>{timeLabel}</p>
        <div className="seat-screen">SCREEN</div>
        <div className="seats-grid">
          {seats.map((seatId) => {
            const isBooked = bookedSeats.has(seatId);
            const isSelected = selectedSeats.includes(seatId);

            return (
              <div
                key={seatId}
                className={`seat ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}`.trim()}
                onClick={() => toggleSeat(seatId)}
              >
                {seatId}
              </div>
            );
          })}
        </div>
        <div className="seat-legend">
          <div className="legend-item"><div className="legend-color available" />Available</div>
          <div className="legend-item"><div className="legend-color selected" />Selected</div>
          <div className="legend-item"><div className="legend-color booked" />Booked</div>
        </div>
        <button
          className="book-button"
          type="button"
          style={{ display: "block", margin: "20px auto 0" }}
          onClick={() => onConfirm(selectedSeats)}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default SeatSelection;