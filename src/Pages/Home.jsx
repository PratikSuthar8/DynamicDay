import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import AboutContainer from "../Components/About/About-container";
import SolutionContainer from "../Components/Solutions/SolutionContainer";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutContainer />
			<SolutionContainer />
		</div>
	);
};

export default Home;
