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
			<label>Select Seat Type: </label>
			<select value={`${price}`} onChange={handleChange} id='movie'>
				<option value='300'>Regular (300tk)</option>
				<option value='350'>Premium (350tk)</option>
			</select>
		</div>
	);
}

export default SeatType;