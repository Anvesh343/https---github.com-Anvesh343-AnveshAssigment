import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TableCoins from './TableCoins'
import ReactPagenate from 'react-paginate'

import './Home.css'


const Home = () => {
    const [coins, setCoins] = useState([])

  const [search, setSearch] = useState('')

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=100&sparkline=false')
    setCoins(res.data)
  }
  useEffect(() => {
    getData()
  },[])

  const fetchComents = async(curentPage) => {
      const pageres = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${curentPage}&page=10&sparkline=false`
        )
        const data = await pageres.json()
        
        return data
  }

  const handlePageClick = async(data) => {
    console.log(data.selected)

    let curentPage = data.selected + 10
    const itemsFromServer = await fetchComents(curentPage)

    setCoins(itemsFromServer)
  }

  return (
    <>
    <div className='container'>
      <div className='row g-4 mt-3 mx-auto'>

        <div>
          <h4 className='coin-text'>
            COIN GECKO
          </h4>
        </div>
        {/* <input
          type='text'
          placeholder='Search a Coin'
          className='form-control  text-light border-0 margin-top mt-4 text-center'
          onChange={e => setSearch(e.target.value)}
        /> */}
       <TableCoins coins={coins}  />
      </div>
      <ReactPagenate
      breakLabel = {'...'}
      pageCount={10}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center p-4'}
      pageClassName = {'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      
       />
    </div>
    </>
  );
}
export default Home