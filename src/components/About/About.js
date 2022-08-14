import React from 'react';
import aboutImage from '../../images/me.PNG'
import catalogue from '../../images/CATALOUGE.pdf'
const About = props => {
  return (
    <section id="about" className='bg-light'>
     <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center wow animate__animated animate__fadeInUp"  data-wow-delay=".3s">
                <h2 className="margin-top-0 text-light hvr-grow">
                    <i className="fas fa-caret-left"></i>&nbsp; Regarding Me &nbsp;<i className="fas fa-caret-right"></i>
               
                </h2>
                    <hr className="dark wow animate__animated animate__flash"  data-wow-delay=".3s" />
                </div>
            </div>
            
        </div>
        <div className="container ">
            <div className="row panel-body">
                <div className="col-md-4">
                    
                        <img className="img-responsive img-circle wow animate__animated animate__fadeInUp text-center" data-wow-delay=".5s" src={aboutImage} alt="Photography"/>
                        
                </div>
                <div className="col-md-8">
                
                <p className="wow animate__animated animate__fadeInUp" data-wow-delay=".5s">Moments is ran by Krunal Sonagara the one holding the camera rasied in Baroda. I offer weddings, engagements, family photogrphy sessions and more.I have been working since the day where I can't imagine doing anything else but photography and pursued an impressive portfolio.</p>
                <p className="wow animate__animated animate__fadeInUp" data-wow-delay=".5s">If you really want to know in a nutshell, please allow me to help you show my success stories by clicking on the heart </p>
                <a href={catalogue} download>
               <div class="heart wow animate__animated animate__fadeInUp"  data-wow-delay=".5s"></div>
                </a>
                </div>
                
                
                
            </div>
        </div>
    </section>
  );
};

export default About;