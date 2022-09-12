import react from 'react';

// component
import SeatType from './componenets/seat-type/seat-type.component';
import SeatStatus from './componenets/seat-status/seat-status.component';
import Screen from './componenets/screen/screen.component';

function App() {
  return (
    <div>
      <SeatType />
      <SeatStatus />
      <Screen />
    </div>
  );
}

export default App;
