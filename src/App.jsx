import { Route, Routes } from 'react-router-dom'
import './App.css'
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
let categoryURL = 'https://6634b1db9bb0df2359a26989.mockapi.io/api/categories'
let productURL = 'https://6634b1db9bb0df2359a26989.mockapi.io/api/products'
function App() {
  const [category,setCategory] = useState([])
  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(null)
  const [night,setNight] = useState(JSON.parse(localStorage.getItem('mode')))
  const fetchdata = async () => {
    setLoading(true)
    try {
     const resp = await fetch(categoryURL)
     const data = await resp.json()
     setCategory(data)
     setLoading(false)
    } catch (error) {
     console.log(error);
     setLoading(false)
    }
    try {
      const resp = await fetch(productURL)
      const data = await resp.json()
      setProduct(data)
      setLoading(false)
     } catch (error) {
      console.log(error);
      setLoading(false)
     }
   }
   useEffect(()=>{
       fetchdata()
   },[])
   useEffect(()=>{
       localStorage.setItem('mode', JSON.stringify(night))
   },[night])
   if(loading){
    return <Loading />
   }
  return (
    <>
      <Header night={night} setNight={setNight} />
      <div className={night ? 'nightlight': ''}>
      <div className='container'>
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Main category={category} product={product} />
          </>
        } />
        <Route path='allproducts' element={<Allproducts product={product} />} />
        <Route path='/product/:id' element={<Detail product={product} />} />
        <Route path='allproducts/product/:id' element={<Detail product={product} />} />
        <Route path='wishlist/product/:id' element={<Detail product={product} />} />
        <Route path='/about' element={<About />} />
        <Route path='/yetkazib-berish' element={<Yetkazibberish />} />
        <Route path='/qaytarish' element={<Qaytarish />} />
        <Route path='/garant' element={<Garant />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='*' element={<Error />}/>
      </Routes>
      </div>
      </div>
      <Footer night={night} />
    </>
  )
}

export default App
