import React, { useContext, useState, useEffect } from "react";

// context
import { SeatPriceContext } from '../../context/seatPriceContext.js';

// styles
import './seat-type.styles.css';

function SeatType() {
	const { updatePrice } = useContext(SeatPriceContext);

	const [price, setPrice] = useState(
		JSON.parse(localStorage.getItem('selectedMoviePrice') || 300)
	);

	// handle select option change
	const handleChange = (e) => {
		e.preventDefault();
		setPrice(Number(e.target.value));
	};

	useEffect(() => {
		// update price for context
		updatePrice(price);
	})

	// save movie data to local storage
	localStorage.setItem('selectedMoviePrice', price);

	return (
		<div className='movie-container'>
			<label>Pick a movie: </label>
			<select value={`${price}`} onChange={handleChange} id='movie'>
				<option value='500'>Avengers: Endgame (500tk)</option>
				<option value='550'>Joker (550tk)</option>
				<option value='450'>Toy Story 4 (450tk)</option>
				<option value='450'>The Lion King (450tk)</option>
			</select>
		</div>
	);
}

export default SeatType;