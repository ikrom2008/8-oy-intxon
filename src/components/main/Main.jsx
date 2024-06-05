import React from 'react'
import './Main.css'
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoMdHeartEmpty } from 'react-icons/io'
import yorliqimg from '../../assets/yorliq.png'
import charts from '../../assets/charts.png'
import arte from '../../assets/arte.png'
import divi from '../../assets/divi.png'
import odeon from '../../assets/odeon.png'
import home1 from '../../assets/home1.png'
import home2 from '../../assets/home2.png'
import home3 from '../../assets/home3.png'
import { LuShoppingCart } from 'react-icons/lu'
import { MdArrowOutward } from 'react-icons/md'
function Main({category, product}) {
    let categories = category?.map((item) => (
        <div className='category' key={item.id}>
            <div>
                <h4>{item.title}</h4>
                <p>От {item.price}₽ <IoIosArrowRoundForward size={20} /></p>
            </div>
            <img src={item.image} alt="" />
        </div>
    ))
    let products = product?.map((item) => (
        <li className='list' key={item.id}>
            <button className='likebtn'><IoMdHeartEmpty /></button>
            <img src={item.image} alt="" />
            <h4>{item.title.slice(0,15)}</h4>
            <span>{+item.price + 100 + '.00'}₽</span>
            <div className='addcart'>
            <p>{item.price}₽</p>
            <button><LuShoppingCart /></button>
            </div>
        </li>
    ))
    categories = categories.slice(0,6)
  return (
    <main className='main'>
      <section className='catalogsection'>
        <div className='sectiontitle'>
            <h3>Каталог</h3>
            <button className='arrowbtn'>Весь каталог <IoIosArrowRoundForward size={20} /></button>
        </div>
        <div className='categorycontainer'>
            {categories}
        </div>
      </section>
      <section className='siteabout'>
        <div className='sectiontitle'>
            <h3>Почему NORNLIGHT?</h3>
            <button className='arrowbtn'>О компании <IoIosArrowRoundForward size={20} /></button>
        </div>
        <div className='maqtovlar'>
            <div className='maqtov'>
                <img src={yorliqimg} alt="" />
                <h4>Только проверенные бренды</h4>
                <p>Бренды, проверенные временем и качеством</p>
            </div>
            <div className='maqtov'>
                <img src={charts} alt="" />
                <h4>Самые низкие цены</h4>
                <p>Ниже не будет нигде</p>
            </div>
            <div className='maqtov'>
                <img src={yorliqimg} alt="" />
                <h4>Быстрая доствка</h4>
                <p>Доставляем по всей РФза 1-10 дней</p>
            </div>
            <div className='maqtov'>
                <img src={charts} alt="" />
                <h4>Большой ассортимент</h4>
                <p>Более 1000 товаров</p>
            </div>
        </div>
      </section>
      <section className='productsection'>
      <div className='sectiontitle'>
            <h3>Популярные товары</h3>
            <button className='arrowbtn'>Все товары <IoIosArrowRoundForward size={20} /></button>
        </div>
        <ul className='categories'>
            <li>Светильники</li>
            <li>Люстры</li>
            <li>Лампы</li>
            <li>Настольные лампы</li>
            <li>Ночники</li>
            <li>Подстветка</li>
            <li>Уличное освещение</li>
            <li>Мебельные установки</li>
        </ul>
        <ul className='lists'>
            {
                products
            }
        </ul>
      </section>
      <section className='brandsection'>
      <div className='sectiontitle'>
            <h3>Только проверенные бренды</h3>
            <div className='btncontrol'>
            <button disabled><IoIosArrowRoundBack size={20} /></button>
            <button><IoIosArrowRoundForward size={20} /></button>
            </div>
        </div>
            <div className="imgcontainer">
                <img src={arte} alt="" />
                <img src={divi} alt="" />
                <img src={odeon} alt="" />
                <img src={arte} alt="" />
            </div>
      </section>
      <section className='blogsection'>
      <div className='sectiontitle'>
            <h3>Блог</h3>
            <button className='arrowbtn'>Перейти в блог <IoIosArrowRoundForward size={20} /></button>
        </div>
        <div className='homes'>
            <div className='home'>
                <img src={home1} alt="" />
                <div>
                    <h4>Как правильно освещать дом снаружи?</h4>
                    <MdArrowOutward size={25} />
                </div>
                <p>01.01.2024</p>
            </div>
            <div className='home'>
                <img src={home2} alt="" />
                <div>
                    <h4>Как правильно освещать дом снаружи?</h4>
                    <MdArrowOutward size={25} />
                </div>
                <p>01.01.2024</p>
            </div>
            <div className='home'>
                <img src={home3} alt="" />
                <div>
                    <h4>Как правильно освещать дом снаружи?</h4>
                    <MdArrowOutward size={25} />
                </div>
                <p>01.01.2024</p>
            </div>
        </div>
        <div className='information'>
            <h3>Производство <br /> светильников</h3>
            <div>
                <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br /> Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Main
