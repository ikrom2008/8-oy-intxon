import React from 'react'
import './Wishlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { LuShoppingCart } from 'react-icons/lu'
import { togleWishlist } from '../../components/context/wishlistSlice'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
function Wishlist() {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let wish = useSelector(state => state.wishlist.value)
    let wishes = wish?.map((item) => (
        <li className='list listwish' key={item.id}>
            <button className='likebtn' onClick={() => dispatch(togleWishlist(item))}><FaHeart size={21} /></button>
            <img src={item.image} alt="" onClick={() => navigate(`product/${item.id}`)} />
            <h4>{item.title.slice(0,15)}</h4>
            <span>{+item.price + 100 + '.00'}₽</span>
            <div className='addcart'>
            <p>{item.price}₽</p>
            <button><LuShoppingCart /></button>
            </div>
        </li>
    ))
    console.log(wishes);
  return (
    <div className='wishlist' >
        <p style={{fontSize: '40px', fontWeight: '600',position: 'relative'}}>Избранные товары<sup className='likesup wishsup' >{wish.length}</sup></p> 
      <ul className='lists wishlists'>
        {
            wishes
        }
      </ul>
    </div>
  )
}

export default Wishlist
