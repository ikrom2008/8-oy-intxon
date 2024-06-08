import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { IoIosSearch, IoMdList } from 'react-icons/io'
import { FaRegHeart } from 'react-icons/fa'
import { LuBarChart } from 'react-icons/lu'
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Switch } from '@mui/material'
import { useSelector } from 'react-redux'
function Header({night,setNight}) {
    const [catalog,setCatalog] = useState(false)
    let wish = useSelector(state => state.wishlist.value)
    let navigate = useNavigate()
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className={night ? 'nightlight': ''}>
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li onClick={() => navigate('/about')}>О компании</li>
                    <li onClick={() => navigate('/yetkazib-berish')}>Доставка и оплата</li>
                    <li onClick={() => navigate('/qaytarish')}>Возврат</li>
                    <li onClick={() => navigate('/garant')}>Гарантии</li>
                    <li onClick={() => navigate('/contact')}>Контакты</li>
                    <li onClick={() => navigate('/blog')}>Блог</li>
                </ul>
                <div className='phonenum'>
                    <strong>8 (800) 890-46-56</strong>
                    <p>Заказать звонок</p>
                    <Switch {...label} onClick={() => setNight(!night)} defaultChecked={night == true}  />
                    <p>Light/Night</p>
                </div>
            </nav>
            
            <div className="logos">
                <button onClick={() => setCatalog(!catalog)} className='hiderkatalog'><IoMdList style={{fontSize: '120%'}}/></button>
                <img src={logo} alt="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
                <div className='catalog'>
                    <button className='catalogbtn'><IoMdList style={{fontSize: '120%'}}/>Каталог</button>
                    <div className='search'>
                        <input type="search" name="" id="" placeholder='Поиск по товарам' />
                        <button><IoIosSearch /></button>
                    </div>
                </div>
                <div className='pages'>
                    <div className='page' onClick={() => navigate('/wishlist')}>
                        <FaRegHeart style={{fontSize: '110%'}} />
                        <p>Избранное</p>
                        <sup className='likesup'>{wish.length}</sup>
                    </div>
                    <div className='page hider' style={{fontSize: '115%'}}>
                        <LuBarChart />
                        <p>Сравнение</p>
                    </div>
                    <div className='page' style={{fontSize: '110%'}}>
                        <FiShoppingCart />
                        <p>Корзина</p>
                    </div>
                </div>
            </div>
            <div className='unhidercon'>
            <div className='search unhider'>
                        <input type="search" name="" id="" placeholder='Поиск по товарам' />
                        <button><IoIosSearch  /></button>
            </div>
            <div className='labelnav'>
                <Switch {...label} onClick={() => setNight(!night)} defaultChecked={night == true}  />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
