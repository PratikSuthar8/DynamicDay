import React from "react";
import video from "../../assets/video.mp4";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
	return (
		<section className="hero">
			<video autoPlay loop muted>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="container">
				<div className="inner-container">
					<h1>
						Growing Businesses With Innovative & Ultimate Solutions
					</h1>
					<Link to="/services">
						<button className="btn-outline">Get started</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
