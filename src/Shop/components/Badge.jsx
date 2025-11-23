import '../styles/Badge.css'
function Badge({ Value, badgeType }) {
	// Si la valeur est fausse → on ne rend rien
	if (!Value) return null;

	// On choisit le texte et la classe CSS selon le type de badge
	let label = '';
	let className = '';

	switch (badgeType) {
		case 'onsale':
			label = 'Sale';
			className = 'badge badge-sale';
			break;
		case 'bestsellers':
			label = 'Best Seller';
			className = 'badge badge-best';
			break;

	}

	return <div className={className}>{label}</div>;
}

export default Badge;













/*
function Badge({ Value, BadgeType }) {
	
	
	return (
		<div>
		
			<div className="Onsale">

			</div>
		
		
			<div
				onClick={() =>
					alert(
						`Cette plante requiert ${quantityLabel[scaleValue]} ${
							careType === 'light' ? 'de lumière' : "d'arrosage"
						}`
					)
				}
			>
				{range.map((rangeElem) =>
					scaleValue >= rangeElem ? (
						<span key={rangeElem.toString()}>{scaleType}</span>
					) : null
				)}
			</div>
		</div>
	)
}

export default Badge

*/