import React from 'react';

function Education() {
    return (
       <div className='Education-container'>
          <div className='education-imagediv'>
            <img className='education-image' src="/assets/images/education.svg" alt="homehero"></img>
          </div>
          <div className='education-text'>
            <div ><h1 className='education-heading'>Free and open market education</h1></div>
            <div className='para'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
              <div className='para-btn' >Varsity <i class="fa-solid fa-arrow-right"></i></div>
            </div>

            <div className='para'>TradingQ&A, the most active trading and investment community in India for all your market related queries.
              <div className='para-btn'>TradingQ&A <i  class="fa-solid fa-arrow-right"></i></div>
            </div>
          </div>

       </div>
      );
}

export default Education;