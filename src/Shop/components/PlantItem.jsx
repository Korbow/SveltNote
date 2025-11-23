import Badge from './Badge'
import { useState } from 'react'
import '../styles/PlantItem.css'

function ModalItem({ plantName, onClose, cover, onsale, bestsellers, price , desc }) {
	return (
		<div className="modalDescItem" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<span className="close" onClick={onClose}>&times;</span>
				<div className="modal-content-base">
					
					<div className="modal-content-baseFlex">


						<div className="modal-content-base-img">
							<img src={cover} alt={`${plantName} cover`}/>
								<div className="BadgeProduct">
									<Badge badgeType='onsale' Value={onsale}/>
									<Badge badgeType='bestsellers' Value={bestsellers}/>
								</div>

						</div>

						<div className="modal-content-base-about">
							<p className="ItemName">{plantName}</p>
							<p className="ItemDesc">{desc}</p>
							<p className="price">{price}$</p>

						</div>
						

						</div>


				</div>

			</div>
		</div>
	)
}
function PlantItem({ cover, name, onsale, bestsellers, price, desc }) {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
		<li className='lmj-plant-item' onClick={() => setShowModal(true)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			
			<div className="BadgeProduct">
				<Badge badgeType='onsale' Value={onsale}/>
				<Badge badgeType='bestsellers' Value={bestsellers}/>
			</div>

		</li>

		{showModal && (
			<ModalItem
				plantName={name}
				onClose={() => setShowModal(false)}
				cover={cover}
				onsale={onsale}
				bestsellers={bestsellers}
				price={price}
				desc={desc}
			/>
		)}
		</>
	)
}

export default PlantItem