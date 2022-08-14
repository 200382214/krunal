import React from 'react'

const Header = () => {
    return (
        <header id="welcome-section"  className="welcome-section d-flex">
		
					<div className="container text-center  my-auto ">
						
						<h1 className='container '>
						<div  className="hvr-wobble-vertical" style={{color:'white'}}>
						<span className="line wow animate__animated animate__flipInX " data-wow-delay="1s">We create</span>
							<span className="line">
								<span className="wow animate__animated animate__lightSpeedInLeft" data-wow-delay="1.1s">Love</span>
							 <span className="color wow animate__animated animate__flipInX" data-wow-delay="1.2s" >&nbsp;&</span>
							 <span className="line wow animate__animated animate__lightSpeedInRight" data-wow-delay="1.3s">&nbsp;moments</span>
							 </span>
						</div>
						</h1>
						<div className='js-nav'>
							<a className="scrolldown  page-scroll" href="#about">
								<div className="chevron"></div>
								<div className="chevron"></div>
								<div className="chevron"></div>
							</a>
						</div>
						</div>
        </header>
    
    );
};

export default Header;
