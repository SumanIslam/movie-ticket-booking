import React, { createContext, useState} from "react";

const SeatPriceContext = createContext();

const SeatPriceContextProvider = (props) => {
  const [price, setPrice] = useState('');

  const updatePrice = (newPrice) => {
    setPrice(newPrice);
  }

  return(
    <SeatPriceContext.Provider value={{ price, updatePrice }}>
      {props.children}
    </SeatPriceContext.Provider>
  )
}

export default SeatPriceContextProvider;