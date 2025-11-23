import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'



function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	const [checkedStates, setCheckedStates] = useState({})

	function addToCart(e, name, price, cover) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		setCheckedStates((prev) => ({ ...prev, [name]: true }))
		setTimeout(() => {
			setCheckedStates((prev) => ({ ...prev, [name]: false }))
		}, 1200)



		let cartAlignText = document.getElementById("cart_drawer");

		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, cover, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, cover, amount: 1 }])
		}
		if (cartAlignText.classList.contains('align')){

		}else{
			cartAlignText.classList.add("align");

		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, onsale, bestsellers, price, category, desc }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id} class="container-plant-list">
							<PlantItem
								cover={cover}
								name={name}
								onsale={onsale}
								bestsellers={bestsellers}
								price={price}
								desc={desc}
							/>
							<div className="desc">
								<div className="descInfo">
									<div className="ProductName">
										{name}
									</div>
									<div className="tag" aria-label="15 million followers">
										<i className="fa-solid fa-user">{price} $</i> 
									</div>
								</div>

								<button id="particle-btn" onClick={(e) => addToCart(e, name, price, cover)}>
								<div className={`cart-container ${checkedStates[name] ? "checked" : ""}`}>
									<svg className="cart-icon" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<circle cx="16.5" cy="18.5" r="1.5"/>
										<circle cx="9.5" cy="18.5" r="1.5"/>
										<path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
									</svg>

									<svg
										className="check-icon"
										xmlns="http://www.w3.org/2000/svg"
										width="36"
										height="36"
										viewBox="0 0 24 24"
									>
										<path
											d="M9 16.17l-3.88-3.88L4 13.41 9 18.41 20 7.41 18.59 6l-9.59 9.59z"
										/>
									</svg>
									
									</div>
								</button>
							</div>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}



export default ShoppingList

