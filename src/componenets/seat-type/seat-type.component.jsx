import React from "react";

// styles
import './seat-type.styles.css'

function SeatType() {
  return(
    <div className="movie-container">
      <label>Select Seat Type: </label>
      <select id="movie">
        <option value="300">Regular (300tk)</option>
        <option value="350">Premium (350tk)</option>
      </select>
    </div>
  )
}

export default SeatType;