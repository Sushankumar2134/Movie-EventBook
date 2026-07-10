import userProfileImage from "../assets/sushan.jpg";
import "../styles/profile.css";

function Profile() {
  return (
    <div className="container">
      <div className="profile-section" style={{ display: "block" }}>
        <div className="profile-header">
          <img src={userProfileImage} alt="User" />
          <div className="profile-details">
            <h3>sushan</h3>
            <p>Email: sushankumar999@gmail.com</p>
          </div>
        </div>
        <div className="booking-history">
          <h4>My Bookings</h4>
          <div className="booking-item">Sunburn Goa- 2 Tickets</div>
          <div className="booking-item">The Kashmir Files - 1 Ticket</div>
          <div className="booking-item">Pro kabaddi League -1 Ticket</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;