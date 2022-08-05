import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const coinsDetails = () => {
  const [coins, setCoins] = useState([])

  const params = useParams()
  const getData = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${params.id}?localization=true`
    )
    setCoins(res.data)
    console.log(res.data)
  }
  useEffect(() => { 
  }, [])
  // console.log(coins && coins[0].description["en"], coins && coins[0].market_cap["eur"])
  


  return (
    <div className='app-cointainer'>
      <h1 className='heading'>Coin Details</h1>
      <p>Name : {coins.name}</p>
      <p>Symbol : {coins.symbol}</p>
      
      <p>hashingAlgorithm : {coins.hashing_algorithm}</p>
      {/* <p>{Object.keys(coins.description)}</p> */}

      <p>{params.current_price}</p>
      {/* <p>€{formatDecimal(coins.market_cap)}</p> */}
      
    </div>
  )
}
export default coinsDetails
    getData()