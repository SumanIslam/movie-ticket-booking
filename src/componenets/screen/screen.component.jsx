import React, { useContext, useState } from "react";

// context
import { SeatPriceContext } from "../../context/seatPriceContext";

// styles
import './screen.style.css';

function Screen() {
	const count = localStorage.getItem('selectedSeats') ? JSON.parse(localStorage.getItem('selectedSeats')).length : 0;

	const [SelectedSeatsCount, setSelectedSeatsCount] = useState(count);

	const { price } = useContext(SeatPriceContext);

	// populate selected seats from local storage
	const populateSeats = () => {
		// all the seats
		const allSeats = document.querySelectorAll('.row .seat');

		const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

		if (selectedSeats !== null && selectedSeats.length > 0) {
			allSeats.forEach((seat, index) => {
				if(selectedSeats.indexOf(index) > -1) {
					seat.classList.add('selected');
				}
			})
		}
	}

	// populateSeats function call
	populateSeats();

	// save index of seats in local storage
	const saveSeatIndex = (allSeats, seats) => {
		const seatsIndex = [...seats].map((seat) => [...allSeats].indexOf(seat));

		localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
	}

	const updateSelectedSeats = (e) => {
		// all the seats
		const allSeats = document.querySelectorAll('.row .seat');

		// only selected seats
		const selectedSeats = document.querySelectorAll('.row .seat.selected');

		// update selected seats
		setSelectedSeatsCount(selectedSeats.length);

		// saveSeatIndex Function call
		saveSeatIndex(allSeats, selectedSeats);
	}

	// make a seat selected when clicked
	const handleClick = (e) => {
		if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
			e.target.classList.toggle('selected')
		}

		// update number selected seats
		updateSelectedSeats(e);
	}

  return (
		<>
			<div className='container'>
				<div className='screen'></div>
				{/* each row is row of 8 seat */}
				{/* first row */}
				<div className='seat-container' onClick={handleClick}>
					<div className='row'>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat occupied'></div>
						<div className='seat occupied'></div>
						<div className='seat'></div>
						<div className='seat'></div>
					</div>
					{/* second row */}
					<div className='row'>
						<div className='seat occupied'></div>
						<div className='seat'></div>
						<div className='seat occupied'></div>
						<div className='seat occupied'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
					</div>
					{/* third row */}
					<div className='row'>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat occupied'></div>
						<div className='seat occupied'></div>
						<div className='seat occupied'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
					</div>
					{/* fourth row */}
					<div className='row'>
						<div className='seat'></div>
						<div className='seat occupied'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat occupied'></div>
						<div className='seat occupied'></div>
						<div className='seat'></div>
					</div>
					{/* fifth row */}
					<div className='row'>
						<div className='seat'></div>
						<div className='seat occupied'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat occupied'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
					</div>
					{/* sixth row */}
					<div className='row'>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat occupied'></div>
					</div>
				</div>
			</div>
      <p className="text">You have selected <span id="count">{SelectedSeatsCount}</span> seats for a price of <span id="total">{SelectedSeatsCount * price}</span> tk</p>
		</>
	);
}

export default Screen;