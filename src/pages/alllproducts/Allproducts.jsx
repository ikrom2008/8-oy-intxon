import React, { useEffect } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { LuShoppingCart } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'

function Allproducts({product}) {
  useEffect(() => {
    scrollTo(0,0)
},[])
  let navigate = useNavigate()
  let products = product?.map((item) => (
    <li className='list' key={item.id}>
        <button className='likebtn'><IoMdHeartEmpty /></button>
        <img src={item.image} alt="" onClick={() => navigate(`product/${item.id}`)} />
        <h4>{item.title.slice(0,15)}</h4>
        <span>{+item.price + 100 + '.00'}₽</span>
        <div className='addcart'>
        <p>{item.price}₽</p>
        <button><LuShoppingCart /></button>
        </div>
    </li>
))
  return (
    <div style={{width: '80%',maxWidth: '1280px',paddingTop: '50px',paddingBottom: '50px'}}>
      <ul className='lists'>
        {
            products
        }
      </ul>
    </div>
  )
}

export default Allproducts
