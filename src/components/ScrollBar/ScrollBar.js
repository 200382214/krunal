import React, { Component } from "react";

/** A React component for scrolling back to the top of the page **/

class ScrollBar extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.scrollY === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.scrollY - this.props.scrollStepInPx);
  }
  
  scroll() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    //store the intervalId inside the state, 
    //so we can use it later to cancel the scrolling
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button href='#' title='Back to top' 
               id='scroll' className='scroll' 
               onClick={ (event) => { 
                              event.preventDefault();
                              this.scroll(); 
                        }}>
                <span className='glyphicon glyphicon-chevron-up'></span>
              </button>;
   }
}

export default ScrollBar;