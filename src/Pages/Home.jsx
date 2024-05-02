import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import AboutContainer from "../Components/About/About-container";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutContainer />
		</div>
	);
};

export default Home;
