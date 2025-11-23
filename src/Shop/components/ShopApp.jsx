import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../../../public/assets/img/featherSVG.svg'
import Cart from './Cart'

import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import '../styles/ShopApp.css'
import '../../styles/Style.css'

function ShopApp() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>Svelt Note Shop</h1>
				<div className="BackToHome">
				<a href="../../">{/* &lt; */}Back to landing page </a> 
				</div>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			
		</div>
	)
}

export default ShopApp
