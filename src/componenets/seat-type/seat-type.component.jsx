import React, { useState, useContext } from "react";

// context
import { SeatPriceContext } from '../../context/seatPriceContext.js';

// styles
import './seat-type.styles.css'

function SeatType() {
  const { updatePrice } = useContext(SeatPriceContext);

  const [price, setPrice] = useState(
		JSON.parse(localStorage.getItem('selectedMoviePrice'))
	);

  const [selectedMovieIndex, setSelectedMovie] = useState(
		JSON.parse(localStorage.getItem('selectedMovieIndex'))
	);

  // save movie data to local storage
  const saveMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }

  // handle select option change
  const handleChange = (e) => {
    e.preventDefault();
    setPrice(Number(e.target.value));
    setSelectedMovie(e.target.selectedIndex);
  }

  // update price for context
  updatePrice(price);

  saveMovieData(selectedMovieIndex, price);

  return (
		<div className='movie-container'>
			<label>Select Seat Type: </label>
			<select onChange={handleChange} id='movie'>
				<option value='300'>Regular (300tk)</option>
				<option selected={selectedMovieIndex} value='350'>Premium (350tk)</option>
			</select>
		</div>
	);
}

export default SeatType;