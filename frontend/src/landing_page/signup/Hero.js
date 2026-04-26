import {  useState } from "react";
import Signup from "./Signup";
import Login from "./Login";


function Hero() {

  
  let [signup, setSignup] = useState(true);

  let handleForm = () => {
    setSignup(!signup);
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Open a free demat and trading account online</h1>
        <h2>
          Start investing brokerage free and join a community of 1.6+ crore investors.
          
        </h2>
      </div>

      <div className="hero-image-signupForm">
        <div className="hero-image">
          <img src="/assets/images/signupPageIMG.png" alt="hero-img" />
        </div>
        {signup ? <Signup handleForm={handleForm} /> : <Login handleForm={handleForm} />}
      </div>
    </div>
  );
}

export default Hero;
