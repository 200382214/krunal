import React from 'react';
import packages from './engagementContent'
import SinglePackageService from '../SinglePackageService';

class Engagement extends React.Component {
    render () {
        return(
            <section id="prewedding" className="backImage"> 
                <div className="text-center wow animate__animated animate__fadeInUp"  data-wow-delay=".3s">
                    <h2 className="margin-top-0 text-light headers">
                        <i className="fas fa-caret-left"></i>&nbsp; Engagement &nbsp;<i className="fas fa-caret-right"></i>
                    </h2>
                    <hr className="light wow animate__animated animate__flash"  data-wow-delay=".3s" />
                </div>
                <div className="container">
                {packages.map((singlePackage, index) => {
                    return (
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <figure class="snip1321"><img src={singlePackage.imgUrl} alt="sq-sample26"/>
                                <figcaption>
                                    <h3>{singlePackage.packageName}</h3>
                                    <p>price: {singlePackage.price}/-</p>
                                    <ul className="service">
                                        {singlePackage.services.map((singlePackageService, i) => {
                                            return (<SinglePackageService singlePackageService={singlePackageService}/>)
                                        })}
                                    </ul>
                                </figcaption> 
                            </figure>
                        </div>
                    )
                })}
                </div>
            </section>
        );
    }
}; 

export default Engagement;