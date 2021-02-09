import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, updateStocks}) {

  function handleClick(stock){
    // console.log(stocks)
    if (stock.bought === false){
      stock.bought = true;
      updateStocks(stocks)
    } 
  }


  const stockList = stocks.map((s) => {
    return <Stock key={s.id} stock={s} handleClick={handleClick}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
