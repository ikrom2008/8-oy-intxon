import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import './i18n'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'
import Allproducts from './pages/alllproducts/Allproducts'
import Detail from './components/detail/Detail'
import About from './pages/about/About'
import Yetkazibberish from './pages/yetkazibberish/Yetkazibberish'
import Qaytarish from './pages/qaytarish/Qaytarish'
import Garant from './pages/garant/Garant'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Wishlist from './pages/wishlist/Wishlist'
import Error from './components/error/Error'
import Loading from './components/loading/Loading'
import Cart from './pages/cart/Cart'
import Dashboard from './components/adminpanel/Dashboard'
import EditProduct from './components/adminpanel/EditProduct'
import { useGetCategoryQuery, useGetProductsQuery } from './components/context/getRequest'
// let categoryURL = 'https://6634b1db9bb0df2359a26989.mockapi.io/api/categories'
// let productURL = 'https://6634b1db9bb0df2359a26989.mockapi.io/api/products'
function App() {
  const {data: categorydata,isLoading: categoryLoading} = useGetCategoryQuery()
  const {data: productdata,isLoading} = useGetProductsQuery()
  let navigate = useNavigate()
  const [category,setCategory] = useState([])
  const [product,setProduct] = useState([])
  const [login,setLogin] = useState(JSON.parse(localStorage.getItem('login')) || null)
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [night,setNight] = useState(JSON.parse(localStorage.getItem('mode')))
  let locitem = localStorage.getItem("i18nextLng")
    if(locitem === "ru-UZ"){
        localStorage.setItem("i18nextLng","ru")
    }
   const handleSumbit = () => {
      localStorage.setItem('login', JSON.stringify({
        username,
        password
      }))
      username == 'john32' && password == '87654321' ? navigate('/admin') : navigate('/')
   }
   useEffect(() => {
    handleSumbit
   },[login])
  //  useEffect(()=>{
  //      fetchdata()
  //  },[])
   useEffect(()=>{
       localStorage.setItem('mode', JSON.stringify(night))
   },[night])
   if(isLoading || categoryLoading){
    return <Loading />
   }
  return (
    <>
      {
        login ? <Header setLogin={setLogin} night={night} setNight={setNight} product={product} /> : <></>
      }
      {
        !login ? <div className='login'>
        <form action="" className='loginwrapper' onSubmit={handleSumbit}>
          <p>Login</p>
          <div>
          <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="" id="" placeholder='UserName' />
          <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder='Password' />
          </div>
          <button type='submit'>Login</button>
        </form>
    </div> : <></>
      }
      <div className={night ? 'nightlight': ''}>
      <div className='container'>
      {
        login ? <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Main category={categorydata} product={productdata} />
          </>
        } />
        <Route path='allproducts' element={<Allproducts product={productdata} />} />
        <Route path='/product/:id' element={<Detail product={productdata} />} />
        <Route path='allproducts/product/:id' element={<Detail product={productdata} />} />
        <Route path='wishlist/product/:id' element={<Detail product={productdata} />} />
        <Route path='/about' element={<About />} />
        <Route path='/yetkazib-berish' element={<Yetkazibberish />} />
        <Route path='/qaytarish' element={<Qaytarish />} />
        <Route path='/garant' element={<Garant />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart night={night} />} />
        <Route path='/admin' element={<Dashboard category={categorydata} setLogin={setLogin} />} />
        <Route path='/edit/:id' element={<EditProduct product={productdata} category={categorydata} />} />
        <Route path='*' element={<Error />}/>
      </Routes> : <></>
      }
      </div>
      </div>
      {
        login ? <Footer night={night} /> : <></>
      }
    </>
  )
}

export default App
