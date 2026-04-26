import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Charges from './Charges';
import DematAMC from './DematAMC';
// import Footer from '../Footer';




function PricingPage() {
    return ( 
        <>
        <Hero/>
        <Brokerage/>
        <Charges/>
        <DematAMC/>
        </>
     );
}

export default PricingPage;