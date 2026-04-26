import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({                  //Global storage context banata hai
  openBuyWindow: (uid) => {},                    //Taki agar koi component galti se Provider ke bahar context use kare, to error na aaye
  closeBuyWindow: () => {},                      //Agar provider na laga ho, tab bhi ye (uid) => {} chalega (kuch nahi karega)
});

export const GeneralContextProvider = (props) => {                    //  State/function ko share karta hai in its children components
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {     //   Jab ye function chalega, buy window khul jaayegi aur us stock ka UID store ho jaayega.
    setIsBuyWindowOpen(true);                   // isBuyWindowOpen → window khuli hai ya nahi
    setSelectedStockUID(uid);               //  selectedStockUID → kis stock ka buy window khula hai
  };

  const handleCloseBuyWindow = () => {      //   Ye function buy window band kar deta hai aur UID reset karta hai.
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider              //  ye sab child components ko openBuyWindow aur closeBuyWindow functions access karne deta hai.
      value={{
        openBuyWindow: handleOpenBuyWindow,             //openBuyWindow naam ka variable context me store kar rahe hain jiska actual function hai handleOpenBuyWindow.
        closeBuyWindow: handleCloseBuyWindow,
      }}                                              //  {props.children} —> wo sab components jo is provider ke andar likhe gaye hain (e.g., <WatchList />).
    >
      {props.children}                    
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}  
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
