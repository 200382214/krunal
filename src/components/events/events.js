import React, { Component } from "react";
import $ from 'jquery'
// import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import eventPhotos from './eventcontent'

class Event extends Component {
    componentDidMount() {
        $(document).ready(function () {

            $(".zoom").hover(function () {

                $(this).addClass('transition');
            }, function () {

                $(this).removeClass('transition');
            });
            // $(".fancybox").fancybox({
            //     openEffect: "none",
            //     closeEffect: "none"
            // });
        });

    }

    render() {
        // const { photoIndex, isOpen } = this.state;
        return (
            <section id="event">
                <div className="text-center wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                    <h2 className="margin-top-0 text-light headers">
                        <i className="fas fa-caret-left"></i>&nbsp; Event &nbsp;<i className="fas fa-caret-right"></i>
                    </h2>
                    <hr className="light wow animate__animated animate__flash" data-wow-delay=".3s" />
                </div>
                <div class="container page-top">
                    <div class="row">
                        {eventPhotos.map((singlePackage, index) => {
                            return (
                                <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a href={singlePackage.imgUrl} class="fancybox" rel="ligthbox">
                                        <img src={singlePackage.imgUrl} class="zoom img-fluid " alt="" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Event;
