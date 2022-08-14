import React from 'react';
import Progress from '../Progress/Progress';

const Services = props => {
  return (
    <section id="services" className='bg-light'>
      <div className="wrapper container ">

      <div className="title">
      <h1 className="text-center wow fadeInRight">What we Offer?</h1>
        <p className="separator" />
      </div>

        <div className="row">
          <div className="services col-lg-6 mx-auto">

            <span className="wow slideInUp" data-wow-delay=".5s">Wedding Photography<Progress done="90"/></span>
            <span className="wow slideInUp" data-wow-delay=".5s">Pre-Wedding Photography<Progress done="90"/></span>
            <span className="wow slideInUp" data-wow-delay=".5s">Angagement Photography<Progress done="85"/></span>
            <span className="wow slideInUp" data-wow-delay=".5s">Event Photography<Progress done="80"/></span>
            <span className="wow slideInUp" data-wow-delay=".5s">Modelling Photoshoot<Progress done="80"/></span>
            <span className="wow slideInUp" data-wow-delay=".5s">Baby Photoshoot<Progress done="75"/></span>
            <span className="wow slideInUp" data-wow-delay=".5s">Meternity Photoshoot<Progress done="75"/></span>
            <span className="wow slideInUp" data-wow-delay=".5s">Product Photohoot<Progress done="70"/></span>
          </div>
          <div className="col-lg-6 mx-auto">
              <div className="img"></div>
          </div>
        </div>
      </div>

    </section>
  );
}
export default Services;
