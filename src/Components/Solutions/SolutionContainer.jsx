import React from "react";
import SolutionCard from "./Solutioncards/SolutionCard";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import icon6 from "../../assets/icon6.svg";
import "./SolutionContainer.css";

const SolutionContainer = () => {
	return (
		<div className="soltuon-section">
			<div className="textarea">
				<p className="heading">Solutions</p>
				<p className="tagline">Connecting Business with the Best</p>
			</div>
			<div className="card-section">
				<SolutionCard
					imageUrl={icon1}
					imageAlt="D365 F&O"
					text="Microsoft D365 F&O/AX 2012"
				/>
				<SolutionCard
					imageUrl={icon2}
					imageAlt="D365 F&O"
					text="Microsoft D365 Commerce"
				/>
				<SolutionCard
					imageUrl={icon3}
					imageAlt="D365 F&O"
					text="Microsoft D365 Business Central"
				/>
				<SolutionCard
					imageUrl={icon4}
					imageAlt="D365 F&O"
					text="Microsoft D365 Sales"
				/>
				<SolutionCard
					imageUrl={icon5}
					imageAlt="D365 F&O"
					text="Azure Cloud Services"
				/>
				<SolutionCard
					imageUrl={icon6}
					imageAlt="D365 F&O"
					text="Power Apps/Power Automate"
				/>
			</div>
		</div>
	);
};

export default SolutionContainer;
