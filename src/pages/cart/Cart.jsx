import React, { useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { decCart, incCart, removeFromCart } from '../../components/context/cartSlice'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { PatternFormat } from 'react-number-format'
function Cart() {
    const [see,setSee] = useState(null)
    const [number,setNumber] = useState(null)
    let dispatch = useDispatch()
    let cartitems = useSelector(state => state.cart.value)
    const totalPrice = cartitems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let cartproducts = cartitems?.map((item) => (
        <li key={item.id} className='cartlist'>
            <img src={item.image} alt="" />
           <div className="formedia cartlist">
           <div className='cartitemtitle'>
                <p>{item.title}</p>
                <p>₽{item.price}</p>
            </div>
            <p className='itemdesc'>{item.desc}</p>
            <p className='itemcategory'>{item.category}</p>
            <div className='incdec'>
                <button disabled={item.quantity <= 1} onClick={() => dispatch(decCart(item))}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(incCart(item))}>+</button>
            </div>
            <button className='delbtn' onClick={() => dispatch(removeFromCart(item))}><RiDeleteBin6Line /></button>
           </div>
        </li>
    ))
    let hidencart = cartproducts.slice(0,3)
    let dostavka = 580
  return (
    <div className='cart'>
      <p className='carttitle' style={{position: 'relative'}}>Корзина <sup style={{left: '155px',background: 'red'}} className='likesup wishsup' >{cartitems.length}</sup></p>
      <ul className='cartlists'>
        <li className='cartlist lihider' style={{justifyContent: 'stretch', height: '20px'}}>
            <p style={{width: '16%'}}>Фото</p>
            <p style={{width: '25%'}}>Товары</p>
            <p style={{width: '27%'}}>Описание</p>
            <p style={{width: '14%'}}>Артикул</p>
            <p style={{width: '10%'}}>Количество</p>
        </li>
        <hr className='lihider' />
        {
            see ? cartproducts : hidencart
        }
        {
            cartproducts.length > 3 ? <button className='seeallcart' onClick={() => {
                setSee(!see)
                scrollTo(0,0)
            }}>{see ? 'Hide' : 'See all'}</button> : <></>
        }
      </ul>
      <div className='rasmiylashtirish'>
            <div className='inpvalues'>
                <p>Оформление</p>
                <div>
                    <input type="text" name="" id="" placeholder='ФИО'/>
                    <PatternFormat value={number} onChange={(e) => setNumber(e.target.value)} onMouseEnter={() => setNumber(8)} placeholder='Телефон' format="+99# (##) ### ## ##" />
                    <input type="text" name="" id="" placeholder='Электронная почта' />
                </div>
            </div>
            <hr />
            <div className='dostavka'>
                <p>Доставка</p>
                <input type="text" name="" id="" placeholder='Адрес доставки'/>
                <textarea name="" id="" placeholder='Комментарий'></textarea>
            </div>
      </div>
      <div className='payment'>
        <div className='oplata'>
            <p>Оплата</p>
            <div>
                <p>Товары.............................................{totalPrice}₽</p>
                <p>Доставка..........................................{dostavka}₽</p>
            </div>
        </div>
        <div className='paymanting'>
            <p>{totalPrice + dostavka}₽</p>
            <div>
                <button>Купить</button>
                <p><input type="radio" name="" id=""/> Я согласен наобработку моих персональных данных</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
