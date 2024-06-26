import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { IoIosSearch, IoMdList } from 'react-icons/io'
import { FaRegHeart } from 'react-icons/fa'
import { LuBarChart } from 'react-icons/lu'
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Switch } from '@mui/material'
import { useSelector } from 'react-redux'
import { MdArrowForwardIos, MdClear } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
function Header({night,setNight,product,setLogin}) {
    const [lang,setLang] = useState(localStorage.getItem("i18nextLng") || "ru")
    let {t, i18n} = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(lang)
    },[lang])
    const [search,setSearch] = useState('')
    let handlesearch = (data) => {
        return data?.filter((user) => user?.title?.toLowerCase()?.includes(search?.toLowerCase()?.trim()))
    }
    let pr = handlesearch(product)?.map((item) => (
      <li key={item.id} onClick={() => {
        navigate(`/product/${item.id}`)
        setSearch('')
      }}>
        <div>
        <img src={item.image}alt="" />
        <p>{item.title}</p>
        </div>
        <MdArrowForwardIos />
      </li>
    ))
    const [catalog,setCatalog] = useState(false)
    let wish = useSelector(state => state.wishlist.value)
    let cartitems = useSelector(state => state.cart.value)
    let navigate = useNavigate()
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className={night ? 'nightlight': ''}>
        <header className='header'>
            <nav className='navbar'>
                <ul>
                    <li onClick={() => navigate('/about')}>{t("kompaniyahq")}</li>
                    <li onClick={() => navigate('/yetkazib-berish')}>{t("dostavka")}</li>
                    <li onClick={() => navigate('/qaytarish')}>{t("qaytarish")}</li>
                    <li onClick={() => navigate('/garant')}>{t("garant")}</li>
                    <li onClick={() => navigate('/contact')}>{t("contact")}</li>
                    <li onClick={() => navigate('/blog')}>{t("blog")}</li>
                </ul>
                <div className='phonenum'>
                    <button onClick={() => {
                        localStorage.removeItem('login')
                        setLogin(false)
                        navigate('/')
                    }}>Log Out</button>
                    <p>{t("zakaz")}</p>
                    <Switch {...label} onClick={() => setNight(!night)} defaultChecked={night == true}  />
                    <p>Light/Night</p>
                    <select name="" id="" value={lang} onChange={(e) => setLang(e.target.value)}>
                        <option value="ru">{t("selectval.val1")}</option>
                        <option value="uz">{t("selectval.val2")}</option>
                    </select>
                </div>
            </nav>
            <div className="logos">
                <button style={catalog ? {position: 'fixed', background: 'white'} : {position: 'static'}} onClick={() => setCatalog(!catalog)} className='hiderkatalog'>{!catalog ? <IoMdList  style={{fontSize: '120%'}}/> : <MdClear  style={{fontSize: '120%'}}  />} </button>
                {
                    catalog ? <div className='absolutecatelog'>
                        <ul><hr />
                    <li onClick={() => navigate('/about')}>{t("kompaniyahq")}</li><hr />
                    <li onClick={() => navigate('/yetkazib-berish')}>{t("dostavka")}</li><hr />
                    <li onClick={() => navigate('/qaytarish')}>{t("qaytarish")}</li><hr />
                    <li onClick={() => navigate('/garant')}>{t("garant")}</li><hr />
                    <li onClick={() => navigate('/contact')}>{t("contact")}</li><hr />
                    <li onClick={() => navigate('/blog')}>{t("blog")}</li><hr />
                </ul><br />
                <select name="" id="" value={lang} onChange={(e) => setLang(e.target.value)}>
                        <option value="ru">{t("selectval.val1")}</option>
                        <option value="uz">{t("selectval.val2")}</option>
                    </select>
                        <button>{t("katalog")}</button>
                        <button onClick={() => {
                            localStorage.removeItem('login')
                            setLogin(false)
                        }}>Log Out</button>
                        <p>8 (800) 890-46-56</p>
                        <span>{t("zakaz")}</span>
                    </div> : <></>
                }
                <img src={logo} alt="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
                <div className='catalog'>
                    <button className='catalogbtn'><IoMdList style={{fontSize: '120%'}}/>{t("katalog")}</button>
                    <div className='search'>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="" id="" placeholder={t("placeholder")} />
                        <button><IoIosSearch /></button>
                        <ul className='searched'>
                {
                  search?.trim() ?
                  handlesearch(product).length ?
                  pr.slice(0,8)
                  :
                  <li>Noto'g'ri ma'lumot</li>
                  :
                   <></>
                }
                </ul>
                    </div>
                </div>
                <div className='pages' style={catalog ? {position: 'fixed',zIndex: '99999',left: '70%'} : {position: 'static'}}>
                    <div className='page' onClick={() => navigate('/wishlist')}>
                        <FaRegHeart style={{fontSize: '110%'}} />
                        <p>{t("saralar")}</p>
                        <sup className='likesup'>{wish.length}</sup>
                    </div>
                    <div className='page hider' style={catalog ? {display: 'flex',fontSize: '115%'} : {fontSize: '115%'}}>
                        <LuBarChart />
                        <p>{t("bellashuv")}</p>
                    </div>
                    <div className='page' style={{fontSize: '110%'}} onClick={() => navigate('/cart')}>
                        <FiShoppingCart />
                        <p>{t("cart")}</p>
                        <sup className='likesup'>{cartitems.length}</sup>
                    </div>
                </div>
            </div>
            <div className='unhidercon'>
            <div className='search unhider'>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="" id="" placeholder='Поиск по товарам' />
                        <button><IoIosSearch  /></button>
                        <ul className='searched'>
                {
                  search?.trim() ?
                  handlesearch(product).length ?
                  pr?.slice(0,8)
                  :
                  <li>Noto'g'ri ma'lumot</li>
                  :
                   <></>
                }
                </ul>
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
