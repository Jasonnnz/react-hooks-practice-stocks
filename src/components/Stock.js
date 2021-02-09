import React from "react";

function Stock({stock, handleClick}) {

  // function handleClick(){
  //   stock.bought = !stock.bought;
  //   console.log(stock.bought)
  // }

  return (
    <div>
      <div className="card" onClick={()=>handleClick(stock)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
