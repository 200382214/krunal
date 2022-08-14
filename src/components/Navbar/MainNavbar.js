import React from "react";
import logo from '../../images/whitelogo.png'
import { Link } from "react-router-dom";
// import SocialLinks from "../SocialLinks/SocialLinks";

function MainNav() {
	return (
		<nav id="topNav" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand page-scroll" href="/">
						<img id="logo" width="120px" height="50px" style={{ position: 'relative', top: '-10px' }} alt="logo" src={logo} />
					</a>
				</div>
				<div className="navbar-collapse collapse" id="bs-navbar">
					<ul className="nav navbar-nav js-nav">
						<li>
							<Link className="page-scroll hvr-underline-from-center" to="/">HOME</Link>
						</li>
						<li>
							<a className="page-scroll hvr-underline-from-center" href="#about">About</a>
						</li>
						<li className="dropdown" >
							<a href="#gall" className="dropdown-toggle hvr-underline-from-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gallery<b className="caret"></b></a>
							<ul className="dropdown-menu">
								<li>
									<Link to="/rituals" className=" hvr-underline-from-left">Rituals</Link>
								</li>
								<li>
									<Link to="/engagement" className=" hvr-underline-from-left">Engagement</Link>
								</li>
								<li>
									<Link to="/prewedding" className=" hvr-underline-from-left">Pre-Wedding</Link>
								</li>
								<li>
									<Link to="/wedding" className="hvr-underline-from-left">Wedding</Link>
								</li>
								<li>
									<Link to="/event" className=" hvr-underline-from-left">Event</Link>
								</li>
								<li>
									<Link to="/maternity" className=" hvr-underline-from-left">Maternity</Link>
								</li>
								<li>
									<Link to="/model" className=" hvr-underline-from-left">Model</Link>
								</li>
								<li>
									<Link to="/product" className=" hvr-underline-from-left">Product</Link>
								</li>
							</ul>
						</li>
						<li>
							<a className="page-scroll hvr-underline-from-center" href="#offer">Services</a>
						</li>
						{/* <li>
							<Link className="page-scroll hvr-underline-from-center" to="/login">Login</Link>
						</li>
						<li>
							<Link className="page-scroll hvr-underline-from-center" to="/register">Register</Link>
						</li> */}
					</ul>
					<ul className="nav js-nav navbar-nav navbar-right ">
						<li>
							<a className="page-scroll wow animate__animated animate__jello hvr-reveal" data-wow-delay="7s" href="#contact">Hire Me?</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default MainNav;
