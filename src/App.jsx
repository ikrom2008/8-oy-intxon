import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'
let categoryURL = 'https://6634b1db9bb0df2359a26989.mockapi.io/api/categories'
let productURL = 'https://6634b1db9bb0df2359a26989.mockapi.io/api/products'
function App() {
  const [category,setCategory] = useState([])
  const [product,setProduct] = useState([])
  const fetchdata = async () => {
    try {
     const resp = await fetch(categoryURL)
     const data = await resp.json()
     setCategory(data)
    } catch (error) {
     console.log(error);
    }
    try {
      const resp = await fetch(productURL)
      const data = await resp.json()
      setProduct(data)
     } catch (error) {
      console.log(error);
     }
   }
   useEffect(()=>{
       fetchdata()
   },[])
  return (
    <>
      <Header />
      <div className='container'>
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Main category={category} product={product} />
          </>
        } />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
