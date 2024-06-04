import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { IoIosSearch, IoMdList } from 'react-icons/io'
import { FaRegHeart } from 'react-icons/fa'
import { LuBarChart } from 'react-icons/lu'
import { FiShoppingCart } from 'react-icons/fi'
function Header() {
    const [catalog,setCatalog] = useState(false)
  return (
    <>
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li>О компании</li>
                    <li>Доставка и оплата</li>
                    <li>Возврат</li>
                    <li>Гарантии</li>
                    <li>Контакты</li>
                    <li>Блог</li>
                </ul>
                <div className='phonenum'>
                    <strong>8 (800) 890-46-56</strong>
                    <p>Заказать звонок</p>
                </div>
            </nav>
            
            <div className="logos">
                <button onClick={() => setCatalog(!catalog)} className='hiderkatalog'><IoMdList style={{fontSize: '120%'}}/></button>
                <img src={logo} alt="logo" />
                <div className='catalog'>
                    <button className='catalogbtn'><IoMdList style={{fontSize: '120%'}}/>Каталог</button>
                    <div className='search'>
                        <input type="search" name="" id="" placeholder='Поиск по товарам' />
                        <button><IoIosSearch /></button>
                    </div>
                </div>
                <div className='pages'>
                    <div className='page'>
                        <FaRegHeart style={{fontSize: '110%'}} />
                        <p>Избранное</p>
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
            <div className='search unhider'>
                        <input type="search" name="" id="" placeholder='Поиск по товарам' />
                        <button><IoIosSearch  /></button>
                    </div>
        </header>
    </>
  )
}

export default Header
