import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, updateStocks}) {
  function handleClick(stock){
    if (stock.bought === true){
      stock.bought = false;
      updateStocks(stocks)
    } 

  }

  const stockList = stocks.map((s) => {
    return <Stock key={s.id} stock={s} handleClick={handleClick}/>
  })
  // console.log(stockList)
  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;
