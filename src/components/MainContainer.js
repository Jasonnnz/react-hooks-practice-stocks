import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([])
  const [ sortBy, setSortBy ] = useState("")
  const [ query, setQuery ] = useState("Tech")

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(stockArr => {
      const stockArray = stockArr.map((s)=>{
        return {...s, bought: false}
      })
      setStocks(stockArray)
    })
  },[])

  const filteredArr = stocks.sort((s1,s2)=>{
    if (sortBy === ""){
      return 0
    } else if (sortBy === "Alphabetically"){
      return s1.name.localeCompare(s2.name)
    } else {
      return s2.price - s1.price
    }
  }).filter((s)=> {
    return s.type.includes(query)
  })

  const purchasedStocks = filteredArr.filter((s)=>{return s.bought})
  function updateStocks(stock){
    const newArr = stocks.map((s)=> {
      if(stock.id === s){
        return stock
      } 
      return s
    })
    setStocks(newArr)
  }

  return (
    <div>
      <SearchBar setSortBy={setSortBy} query={query} setQuery={setQuery}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredArr} updateStocks={updateStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={purchasedStocks} updateStocks={updateStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
