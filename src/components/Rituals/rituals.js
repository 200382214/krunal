import React from 'react';

function Rituals() {

    return (
       
        <section id="rituals" className="bg-dark backImage">
            
            <div className="col-lg-12 text-center wow slideInUp" data-wow-delay=".6s">

                <h2 className="margin-top-0 text-light">
                    <i className="fas fa-caret-left"></i>&nbsp; RITUALS &nbsp;<i className="fas fa-caret-right"></i>
                </h2>
                <hr className="dark"/>
            </div>
            <div className="gallery-wrap">
                <div className="item item-3"></div>
                <div className="item item-4"></div>
                <div className="item item-1"></div>
                <div className="item item-2"></div>
                <div className="item item-5"></div>
            </div>
        </section>
    );
};

export default Rituals;