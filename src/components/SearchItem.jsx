import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const SearchItem = ({cart,setcart}) => {
  const {term}=useParams()
  const [filterdata,setfilterdata]=useState([])
  useEffect(()=>{
     const filtereddata=()=>{
         const data=items.filter((p)=>p.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
         setfilterdata(data)
     }
     
     filtereddata()
    
  },[term])
  return (
      <Product items={filterdata} cart={cart} setcart={setcart}/>
  )
}

export default SearchItem