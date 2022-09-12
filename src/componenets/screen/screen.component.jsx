import React from "react";

// styles
import './screen.style.css'

function Screen() {
  return (
		<>
			<div className='container'>
				<div className='screen'></div>
				{/* each row is row of 8 seat */}
				{/* first row */}
				<div className='seat-container'>
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
      <p className="text">You have selected <span id="count">0</span> seats for a price of <span id="total">0</span> tk</p>
		</>
	);
}

export default Screen;