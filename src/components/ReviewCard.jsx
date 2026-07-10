import "../styles/details.css";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <img className="review-avatar" src={review.avatar} alt={`${review.name} avatar`} />
      <div className="review-meta">
        <div className="review-name">{review.name}</div>
        <div className="review-text">{review.text}</div>
        <div className="review-stars">
          {review.emoji} {review.rating}★
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;