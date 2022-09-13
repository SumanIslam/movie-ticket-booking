import React from "react";

// styles
import './seat-status.styles.css'

function SeatStatus() {
  return (
		<ul className='showcase'>
			<li>
				<div className='seat-align'>
					<div className='seat'></div>
					<small>Available</small>
				</div>
			</li>
			<li>
				<div className='seat-align'>
					<div className='seat selected'></div>
					<small>Selected</small>
				</div>
			</li>
			<li>
				<div className='seat-align'>
					<div className='seat occupied'></div>
					<small>Occupied</small>
				</div>
			</li>
		</ul>
	);
}

export default SeatStatus;