import React, { useState, useContext } from "react";

// context
import { SeatPriceContext } from '../../context/seatPriceContext.js';

// styles
import './seat-type.styles.css'

function SeatType() {
  const { updatePrice } = useContext(SeatPriceContext);
  const [price, setPrice] = useState(300);

  const handleChange = (e) => {
    e.preventDefault();
    setPrice(Number(e.target.value));
  }

  updatePrice(price);
  return (
		<div className='movie-container'>
			<label>Select Seat Type: </label>
			<select onChange={handleChange} id='movie'>
				<option value='300'>Regular (300tk)</option>
				<option value='350'>Premium (350tk)</option>
			</select>
		</div>
	);
}

export default SeatType;