import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

type HeaderProps = {
   totalPrice: number
}

const Header = ({totalPrice}:HeaderProps) => {
  return (
    <header className='header d-f jc-sb align-center'>
        <div className='header-logo'>MW</div>
        <nav>
          <ul className="header-nav-list d-f">
            <li><Link to ="/">Головна</Link></li>
            <li><Link to="support">Служба підтримки</Link></li>
          </ul>
        </nav>
        <div className='header-products d-f align-center'>
           <div><img src="images/cart.png" alt="cart" /></div>
           <div className="header-products-price">${totalPrice}</div>
        </div>
    </header>
  )
}

export default Header