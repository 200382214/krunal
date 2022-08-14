/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import img1 from '../../images/headerImageRing.jpg'


const Gallaries = props => {
    return (
        <section id="gallaries" className="bg-light">
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                    <a href="#galleryModal" className="gallery-box" data-toggle="modal" data-src={img1}>
                        <img src={img1} className="img-responsive" alt="Image 1"/>
                        <div className="gallery-box-caption">
                            <div className="gallery-box-content">
                                <div>
                                    <i className="icon-lg ion-ios-search"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp  " data-wow-delay=".3s">
                    <a href="#galleryModal" className="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/getrefe/regular/tumblr_nqune4OGHl1slhhf0o1_1280.jpg">
                        <img src="//splashbase.s3.amazonaws.com/getrefe/regular/tumblr_nqune4OGHl1slhhf0o1_1280.jpg" className="img-responsive" alt="Image 2"/>
                        <div className="gallery-box-caption">
                            <div className="gallery-box-content">
                                <div>
                                    <i className="icon-lg ion-ios-search"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp  " data-wow-delay=".3s">
                    <a href="#galleryModal" className="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/unsplash/regular/photo-1433959352364-9314c5b6eb0b%3Fq%3D75%26fm%3Djpg%26w%3D1080%26fit%3Dmax%26s%3D3b9bc6caa190332e91472b6828a120a4">
                        <img src="//splashbase.s3.amazonaws.com/unsplash/regular/photo-1433959352364-9314c5b6eb0b%3Fq%3D75%26fm%3Djpg%26w%3D1080%26fit%3Dmax%26s%3D3b9bc6caa190332e91472b6828a120a4" className="img-responsive" alt="Image 3"/>
                        <div className="gallery-box-caption">
                            <div className="gallery-box-content">
                                <div>
                                    <i className="icon-lg ion-ios-search"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp  " data-wow-delay=".3s">
                    <a href="#galleryModal" className="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-moto-drawing-illusion-nabeel-1440x960.jpg">
                        <img src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-moto-drawing-illusion-nabeel-1440x960.jpg" className="img-responsive" alt="Image 4"/>
                        <div className="gallery-box-caption">
                            <div className="gallery-box-content">
                                <div>
                                    <i className="icon-lg ion-ios-search"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp  " data-wow-delay=".3s">
                    <a href="#galleryModal" className="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-new-york-crosswalk-nabeel-1440x960.jpg">
                        <img src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-new-york-crosswalk-nabeel-1440x960.jpg" className="img-responsive" alt="Image 5" />
                        <div className="gallery-box-caption">
                            <div className="gallery-box-content">
                                <div>
                                    <i className="icon-lg ion-ios-search"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp  " data-wow-delay=".3s">
                    <a href="#galleryModal" className="gallery-box" data-toggle="modal" data-src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-clothes-exotic-travel-nabeel-1440x960.jpg">
                        <img alt="Image 6"  className="img-responsive" src="//splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-clothes-exotic-travel-nabeel-1440x960.jpg"  />
                        <div className="gallery-box-caption">
                            <div className="gallery-box-content">
                                <div>
                                    <i className="icon-lg ion-ios-search"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div id="galleryModal" className="modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg animate__animated animate__jackInTheBox">
        <div className="modal-content">
        	<div className="modal-body">
        		<img alt="modal" src="//placehold.it/1200x700/222?text=..." id="galleryImage" className="img-responsive" />

        	</div>
        </div>
        </div>
    </div>

        </section>
      );
}
export default Gallaries;