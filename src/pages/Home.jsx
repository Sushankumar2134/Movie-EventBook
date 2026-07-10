import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import MovieCard from "../components/MovieCard";
import EventCard from "../components/EventCard";
import movies from "../data/movies";
import events from "../data/events";
import userProfileImage from "../assets/sushan.jpg";
import "../styles/home.css";

function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const movieCarouselRef = useRef(null);
  const eventCarouselRef = useRef(null);
  const navigate = useNavigate();

  const filteredMovies = useMemo(() => {
    const term = searchValue.toLowerCase().trim();
    if (!term) {
      return movies;
    }

    return movies.filter((movie) => movie.title.toLowerCase().includes(term));
  }, [searchValue]);

  const filteredEvents = useMemo(() => {
    const term = searchValue.toLowerCase().trim();
    if (!term) {
      return events;
    }

    return events.filter((event) => event.title.toLowerCase().includes(term));
  }, [searchValue]);

  const eventGroups = useMemo(() => ({
    sports: events.filter((event) => event.category === "sports"),
    music: events.filter((event) => event.category === "music"),
    comedy: events.filter((event) => event.category === "comedy")
  }), []);

  const slide = (sliderRef, direction) => {
    if (!sliderRef.current) {
      return;
    }

    sliderRef.current.scrollBy({
    left: direction * 780,
      behavior: "smooth"
    });
  };

  const handleBookMovie = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  const handleBookEvent = (event) => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="container">
      <SearchBar value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div id="moviesSection" style={{ display: activeTab === "all" ? "block" : "none" }}>
        <h2>Recommended Movies</h2>
        <div className="slider-wrapper">
          <button className="nav-btn prev" type="button" onClick={() => slide(movieCarouselRef, -1)}>
            ❮
          </button>
          <div className="movie-carousel" id="movieSlider" ref={movieCarouselRef}>
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onBook={handleBookMovie} />
            ))}
          </div>
          <button className="nav-btn next" type="button" onClick={() => slide(movieCarouselRef, 1)}>
            ❯
          </button>
        </div>

        <h3>Best Events In This Week</h3>
        <div className="slider-wrapper">
          <button className="nav-btn prev" type="button" onClick={() => slide(eventCarouselRef, -1)}>
            ❮
          </button>
          <div className="event-carousel" id="eventSlider" ref={eventCarouselRef}>
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} onBook={handleBookEvent} />
            ))}
          </div>
          <button className="nav-btn next" type="button" onClick={() => slide(eventCarouselRef, 1)}>
            ❯
          </button>
        </div>
      </div>

      <div id="sportsSection" className="sports-section" style={{ display: activeTab === "sports" ? "block" : "none" }}>
        <h2>Sports Events</h2>
        <div className="event-carousel">
          {eventGroups.sports.map((event) => (
            <EventCard key={event.id} event={event} onBook={handleBookEvent} />
          ))}
        </div>
      </div>

      <div id="musicSection" className="music-section" style={{ display: activeTab === "music" ? "block" : "none" }}>
        <h2>Music Events</h2>
        <div className="event-carousel">
          {eventGroups.music.map((event) => (
            <EventCard key={event.id} event={event} onBook={handleBookEvent} />
          ))}
        </div>
      </div>

      <div id="comedySection" className="comedy-section" style={{ display: activeTab === "comedy" ? "block" : "none" }}>
        <h2>Comedy Shows</h2>
        <div className="event-carousel">
          {eventGroups.comedy.map((event) => (
            <EventCard key={event.id} event={event} onBook={handleBookEvent} />
          ))}
        </div>
      </div>

      <div id="profileSection" className="profile-section" style={{ display: activeTab === "profile" ? "block" : "none" }}>
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

export default Home;