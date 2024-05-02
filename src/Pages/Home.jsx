import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import AboutContainer from "../Components/About/About-container";
import SolutionContainer from "../Components/Solutions/SolutionContainer";
import Footer from "../Components/Footer/Footer";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutContainer />
			<SolutionContainer />
			<Footer />
		</div>
	);
};

export default Home;
