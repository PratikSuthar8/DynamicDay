import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Solutions from "./Pages/Solutions";
import Blogs from "./Pages/Blogs";
import Services from "./Pages/Services";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/solution" element={<Solutions />} />
				<Route path="/blog" element={<Blogs />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		</>
	);
}

export default App;
