import React from "react";

function Hero() {
  return (
    <div className="about-hero">
      <div className="hero-heading">
        <h2>We pioneered the discount broking model in India.</h2>
        <h2> Now, we are breaking ground with our technology.</h2>
      </div>

      <div className="hero-text-container">
        <hr></hr>
        <div className="hero-text">
          <div className="hero-para">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="hero-para">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <span className="blue">Rainmatter</span>, our fintech fund and
              incubator, has invested in several fintech startups with the goal
              of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our <span className="blue">blog</span> or
              see what the media is{" "}
              <span className="blue">saying about us</span> or learn more about
              our business and product{" "}
              <span className="blue">philosophies</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
