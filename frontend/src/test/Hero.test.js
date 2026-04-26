import React from 'react';
import {render , screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Hero from '../landing_page/home/Hero.js';

//Test Suite for Hero Component  Run This file using npm test command

describe("Hero component" , ()=>{
    test("renders hero image ", () => {
        render(<Hero />);
        const heroImage= screen.getByAltText("homehero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src" , "assets/images/homeHero.png");
})
});