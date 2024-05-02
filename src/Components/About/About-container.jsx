import React from "react";
import "./About-container.css";
import banner from "../../assets/ERPBanner.webp";
const AboutContainer = () => {
	return (
		<div className="about-section">
			<div className="innerdiv">
				<img src={banner} alt="ERP" className="erp-banner" />
				<div className="about">
					<div className="header">
						<h1>Who We Are</h1>
					</div>
					<div className="text">
						<p>
							DynamicDay Technologies LLP is a significant
							provider of ERP solutions, especially Microsoft
							Dynamics ERP. We are the Microsoft authorized
							partner ERP solution provider for all your business
							needs. We provide comprehensive business solutions
							to automate and streamline your business processes
							and help you achieve your business goals. Let
							winning be more than just a phase; have complete
							control over your business process.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContainer;
