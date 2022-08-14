import React from 'react';
import packages from './PreWeddingContent'
import SinglePackageService from '../SinglePackageService';

class PreWedding extends React.Component {
	render() {
		return (
			<section id="prewedding" className="backImage"> 
				<div className="text-center wow animate__animated animate__fadeInUp"  data-wow-delay=".3s">
					<h2 className="margin-top-0 text-light headers">
						<i className="fas fa-caret-left"></i>&nbsp; Pre-Wedding &nbsp;<i className="fas fa-caret-right"></i>
					</h2>
					<hr className="light wow animate__animated animate__flash"  data-wow-delay=".3s" />
				</div>
				<div className="container">
					<div className="row no-gutter">
						{packages.map((singlePackage, index) => {
							return (
								<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
									<div className="hovereffect">
										<img className="img-responsive" src={singlePackage.imgUrl} alt="" />
										<div className="overlay">
										<h3>{singlePackage.packageName}</h3>
											<p className="text-center small">
											<h5>
											Price: {singlePackage.price} -/
											</h5>
											</p>
											<ul className="service">
												{singlePackage.services.map((singlePackageService, i) => {
													return (<SinglePackageService singlePackageService={singlePackageService}/>)
												})}
											</ul>
											
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		);
	}
};


export default PreWedding;
