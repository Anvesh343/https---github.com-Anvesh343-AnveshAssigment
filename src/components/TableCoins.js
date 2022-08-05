import React from "react";
import './Coin.css';
import CoinRow from './CoinRow'

const TableCoin = ({coins, search}) => {
    
  const filteredCoins = coins.filter(
    (coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
  )
return (
  <div className='table-container'>
      <div className="coin-row">
        <div className="coin">
          <p className="coin coin-image">Image</p>
          <p className="coin coin-symbol">Symbol</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Current Price</p>
          <p className="'coin-volume">High 24h</p>
          <p className="coincoin-marketcap">Low 24h</p>
        </div>
      </div>
        {filteredCoins.map((coin, i) => (
          <CoinRow coin={coin} index={i + 1} key={i} />
        ))}
      
  </div>
    
)
}
export default TableCoin;  