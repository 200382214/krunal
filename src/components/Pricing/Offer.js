import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Offer extends Component {
    render() {
        return (
            <aside id="offer" className="bg-dark">

                <div className="container">
                    <div className="row flex-center sm-no-flex">


                    <div className="pull-right sm-no-float col-md-4 sm-text-center">
                            <div
                                className="wow animate__animated animate__fadeInUp " data-wow-delay=".3s">
                                <h2 className="margin-top-0 text-light headers">
                                    <i className="fas fa-caret-left"></i>&nbsp; What we offer? &nbsp;<i className="fas fa-caret-right"></i>
                                </h2>
                                <hr
                                    className="light wow animate__animated animate__flash"
                                    data-wow-delay=".3s"/>
                            </div>

                    </div>
                  
                        <div className="pull-left sm-no-float col-md-8">
                            <ul className="team-members">

                                <li className="clearfix">

                                    <div className="member-details">
                                        <div className="wow animate__animated animate__flipInX " data-wow-delay=".3s">
                                        <Link to='/prewedding'>

                                            <img
                                            src="https://firebasestorage.googleapis.com/v0/b/photography-2404.appspot.com/o/services%2F033A9598.jpg?alt=media&token=db0a859f-8562-48ec-b6a3-06f943f15d9b"

                                                alt="Photography"/>
                                            <div className="member-info">
                                                <h3>Pre-Wedding</h3>
                                                <p>Photography</p>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>

                                </li>

                                <li className="clearfix">

                                    <div className="member-details">
                                        <div className="wow animate__animated animate__flipInX " data-wow-delay=".5s">
                                        <Link to='/engagement'>
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/photography-2404.appspot.com/o/services%2F033A0839.jpg?alt=media&token=9cc38709-864c-461f-80a1-13c825f5bb66"
                                                alt="Photography"/>
                                            <div className="member-info">
                                                <h3>Engagement</h3>
                                                <p>Photography</p>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="member-details">
                                        <div className="wow animate__animated animate__flipInX " data-wow-delay=".7s">
                                            <img
                                            src="https://firebasestorage.googleapis.com/v0/b/photography-2404.appspot.com/o/services%2F033A8179-01.jpg?alt=media&token=818e2eba-915e-4a79-84a1-93464c91abf1"
                                                alt="Photography"/>
                                            <div className="member-info">
                                                <h3>Modelling</h3>
                                                <p>Photography</p>
                                            </div>
                                        </div>
                                    </div>

                                </li>

                                <li className="clearfix">
                                    <div className="member-details">
                                        <div className="wow animate__animated animate__flipInX " data-wow-delay=".9s">
                                        <Link to='/event'>

                                            <img
                                            src="https://firebasestorage.googleapis.com/v0/b/photography-2404.appspot.com/o/services%2F_DSC0711-01.jpg?alt=media&token=96bafc0e-3bb6-4d8a-bc9e-a5c0e1a2d1a0"
                                                alt="Photography"/>
                                            <div className="member-info">
                                                <h3>Event/Concert</h3>
                                                <p>Photography</p>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="member-details">
                                        <div className="wow animate__animated animate__flipInX " data-wow-delay="1.1s">
                                            <Link to='/wedding'>
                                                <img
                                                src="https://firebasestorage.googleapis.com/v0/b/photography-2404.appspot.com/o/services%2F033A0719.jpg?alt=media&token=a88b14a9-158b-4d05-8dd6-23127d10d2d0"

                                                    alt="Photography"/>
                                                <div className="member-info">
                                                    <h3>Wedding</h3>
                                                    <p>Photography</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </li>

                            </ul>
                            
                        </div>
  
                     
                    </div>
                    <div className="col-lg-12 text-center wow animate__animated animate__fadeInUp"  data-wow-delay=".3s">
                        
        <h2 className="margin-top-0 text-light hvr-grow">
            <i className="fas fa-heart"></i>&nbsp; We also offer Black N White shots!! &nbsp;<i className="fas fa-heart"></i>
       
        </h2>
        
        </div>
                </div>
                
            </aside>

        )
    }
}

export default Offer
