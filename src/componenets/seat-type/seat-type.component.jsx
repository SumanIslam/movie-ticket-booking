import React from "react";

// styles
import './seat-type.styles.css';

function SeatType() {
  return(
    <div className="movie-container">
      <label>Select Seat Type</label>
      <select id="movie">
        <option value="250">Regular</option>
        <option value="300">Premium</option>
      </select>
    </div>
  )
}

export default SeatType;