import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsCartCheckFill } from "react-icons/bs";

const Navbar = ({ setdata, cart }) => {
       const location = useLocation()
       const navigate = useNavigate();
       const [searchterm, setsearchterm] = useState("");
       const filterbycategory = (category) => {
              const element = items.filter((product) => product.category === category)
              setdata(element);
       }
       const filterbyprice = (price) => {
              const element = items.filter((product) => product.price >= price)
              setdata(element);
       }
       const handlesubmit = (e) => {
              e.preventDefault();
              navigate(`/SearchItem/${searchterm}`)
       }
       return (
              <>
                     <header className='sticky-top'>
                            <div className="nav-bar">
                                   <Link to="/" className="brand">E-Cart</Link>
                                   <form className="search-box" onSubmit={handlesubmit}>
                                          <input type="text" placeholder='Search Products' value={searchterm} onChange={(e) => setsearchterm(e.target.value)} />
                                   </form>
                                   <Link to="/cart" className="cart">
                                          <button type="button" class="btn btn-primary position-relative">
                                          <BsCartCheckFill style={{fontSize:'1.5rem'}}/>
                                                 <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                        {cart.length}
                                                        <span class="visually-hidden">unread messages</span>
                                                 </span>
                                          </button>
                                   </Link>
                            </div>
                            {
                                   location.pathname == '/' && (
                                          <div className="nav-bar-wrapper">
                                                 <div className="items">Filter by {"->"}</div>
                                                 <div onClick={() => setdata(items)} className="items">No Filter</div>
                                                 <div onClick={() => filterbycategory('mobiles')} className="items">Mobiles</div>
                                                 <div onClick={() => filterbycategory('laptops')} className="items">Laptops</div>
                                                 <div onClick={() => filterbycategory('tablets')} className="items">Tablets</div>
                                                 <div onClick={() => filterbyprice('29999')} className="items">{">="}29999</div>
                                                 <div onClick={() => filterbyprice('49999')} className="items">{">="}49999</div>
                                                 <div onClick={() => filterbyprice('69999')} className="items">{">="}69999</div>
                                                 <div onClick={() => filterbyprice('89999')} className="items">{">="}89999</div>
                                          </div>
                                   )
                            }

                     </header>
              </>
       )
}

export default Navbar