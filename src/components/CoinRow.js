import React from "react";
import {Link} from 'react-router-dom'


const CoinRow = ({coin}) => {
    console.log(coin)
    return (
      <Link to={`/coin-id/${coin.id}`}>
      <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={coin.image} alt='crypto' />
          <h1>{coin.name}</h1>
          <p className='coin-symbol'>{coin.symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>€{coin.current_price}</p>
          <p className='coin-volume'>€{coin.high_24h}</p>
          <p className='coin-marketcap'>
          €{coin.low_24h}
          </p>
        </div>
      </div>
    </div>
    </Link>
    )
}

export default CoinRow 