import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import SearchItem from './components/SearchItem'
import ProductDetail from './components/ProductDetail'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { items } from './components/Data'

const App = () => {
  const [data,setdata]=useState([...items])
  const [cart, setcart] = useState([])
  return (
      <>
        <Router>
             <Navbar setdata={setdata} cart={cart} />
             <Routes>
                  <Route path='/' element={<Product items={data} cart={cart} setcart={setcart}/>}></Route>
                  <Route path='/product/:id' element={<ProductDetail cart={cart} setcart={setcart}/>}></Route>
                  <Route path='/SearchItem/:term' element={<SearchItem cart={cart} setcart={setcart}/>}></Route>
                  <Route path='/Cart' element={<Cart cart={cart} setcart={setcart}/>}></Route>
                  
             </Routes>
        </Router>
      </>
  )
}

export default App