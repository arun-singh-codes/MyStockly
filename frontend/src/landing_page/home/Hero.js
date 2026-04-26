import React from 'react';

function Hero() {
    return ( 
        <div className="HeroContainer">
            <div className="Hero">
                <img src="assets/images/homeHero.png"  alt="homehero"/>
                <h4>Invest Like A Pro on MyStockly</h4>
                <p>Invest smarter in stocks, mutual funds, and more — all in one place.</p>
                <div className='button'><h2><button>Sign up for free</button></h2></div>
            </div>
        </div>
        
     );
}

export default Hero;