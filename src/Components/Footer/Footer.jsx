import React from "react";
import "./Footer.css";
import Brand from "../../assets/Brand.png";
const Footer = () => {
	return (
		<div className="footer">
			<div className="iner-container">
				<div className="top-container">
					<div className="brand-build">
						<img src={Brand} alt="" className="brand-logo" />
						<h2 className="brand-name">
							DynamicDay <span>Technologies</span>
						</h2>
					</div>
					<div className="social">
						<h1>Social Media</h1>
						<div className="social-links">
							<p>Facebook</p>
							<p>Instagram</p>
							<p>Twitter</p>
							<p>Linkedin</p>
							<p>YouTube</p>
						</div>
					</div>
				</div>
				<div className="container1">
					<div className="left">
						<h2>About</h2>
						<ul className="extralink">
							<li>Who we are</li>
							<li>Career</li>
							<li>Services</li>
							<li>Industries</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className="middle1">
						<h2>About</h2>
						<ul className="extralink">
							<li>Who we are</li>
							<li>Career</li>
							<li>Services</li>
							<li>Industries</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className="middle2">
						<h2>About</h2>
						<ul className="extralink">
							<li>Who we are</li>
							<li>Career</li>
							<li>Services</li>
							<li>Industries</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className="middle3">
						<h2>About</h2>
						<ul className="extralink">
							<li>Who we are</li>
							<li>Career</li>
							<li>Services</li>
							<li>Industries</li>
							<li>Contact us</li>
						</ul>
					</div>
				</div>

				<div className="bottom-container">
					<div className="bottom-left">
						<div className="newslatter">
							<h5 className="subscribe title-h6">
								Subscribe To Our Newsletter
							</h5>
							<p className="desc">
								Stay updated with latest technology trends.
							</p>
							<form className="form-control">
								<div className="sub-box">
									<div className="input-group">
										<input
											type="text"
											placeholder="Enter your email"
										/>
										<button>Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="bottom">
					created by Pratik Suthar. &copy; All rights reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
