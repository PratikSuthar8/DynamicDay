import React from "react";

const SolutionCard = ({ imageUrl, imageAlt, text }) => {
	return (
		<div className="card">
			<div className="card-container">
				<img src={imageUrl} alt={imageAlt} />
				<p className="text">{text}</p>
			</div>
		</div>
	);
};

export default SolutionCard;
