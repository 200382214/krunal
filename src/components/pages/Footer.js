import React from 'react'
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks/SocialLinks';

export default function NewFooter() {
    return (
        <footer id="footer">
        <div className="container">
            <div className="row">
            <div className="col-xs-6 col-sm-3">
                <span>
                <h4>THANKS FOR VISITING</h4>
              <h5 className="date mb-0 cursive">© {new Date().getFullYear()} MOMENTS </h5>
                 </span>
                </div>
                <div className="col-xs-6 col-sm-3 column">
                    <h4>Information</h4>
                    <ul className="list-unstyled">
                   
                        <li>  <Link to="/offer">
                        Services
                        </Link></li>
                        <li>
                        <a href="/images/CATALOUGE.pdf" download>
                            Catalouge
                        </a>
                        </li>

                    </ul>
                </div>
                <div className="col-xs-12 col-sm-3 column">
                    <h4>About</h4>
                    <ul className="list-unstyled">

                        <li>
                            <Link to="/contact" >Contact Us
                            </Link>
                        </li>

                        <li>
                            <Link to="/privacy-policy" >Privacy Policy
                            </Link>
                        </li>
                        <li><a href="#home" data-toggle="modal" data-target="#TNCmodal">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
            
        
                <div className="col-xs-12 col-sm-3 text-center">
    
                    <h4>Follow</h4>
                    <ul className="list-inline">
                        <SocialLinks />
                    </ul>
                </div>
            </div>
            <br/>
            
        </div>
        <div class="modal fade" id="TNCmodal" tabindex="-1" role="dialog" aria-labelledby="TNCmodalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header text-light">
                <h3 id="TNCmodalLabel">Terms & Conditions</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body terms">
                <p>PHOTOGRAPHY</p>
                <p>All photos will be given in softcopy.</p>
                <p>VIDEOGRAPHY</p>
                <p>Only edited video will be given.</p>
                <p>PRICES</p>
                    <p>Prices will be decided as per event or concert.</p>
                    <p>Charges will be varied with time period of event.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </footer>

    )
}
