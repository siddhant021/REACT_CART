import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({ cart, setcart }) => {
  const addtocart = (id, price, title, description, imgSrc) => {
    const obj = {
        id, price, title, description, imgSrc
    };
    setcart([...cart, obj]);
    toast.success('Item added on cart', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
  }  
  const { id } = useParams()
  const [product, setproduct] = useState({})
  const [relatedproduct, setrelatedproduct] = useState([])
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id)
    setproduct(filterProduct[0])
    const relatedproducts = items.filter((p) => p.category === product.category)
    setrelatedproduct(relatedproducts)
    }, [id, product.category]);
  return (
    <>
      
      <div className="container con" >
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button className="btn btn-warning" onClick={() => addtocart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add to Cart</button>
        </div>
      </div>
      <h1 className='text-center'>Related Products</h1>
      <Product cart={cart} setcart={setcart} items={relatedproduct}  />
    </>
  )
}

export default ProductDetail



