import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  const truncatedSummary =
    summary.length > 30 ? `${summary.slice(0, 100)}...` : summary;

  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres && genres.length > 0 ? (
            genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))
          ) : (
            <li>No Genres Available</li>
          )}
        </ul>
        <p className="movie__summary">{truncatedSummary}</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,

  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
