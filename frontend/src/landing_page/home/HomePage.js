import React from 'react';



import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
// import Footer from '../Footer';



function HomePage() {
    return ( 
        <div className="HomePage">
            <Hero/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </div>
     );
}

export default HomePage;