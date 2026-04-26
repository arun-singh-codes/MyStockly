import React from "react";

function Team() {
  return (
    <div className="team-container">

      <div className="team-container-items">
        <div className="people-image-container">
          <div className="people-image">

          </div>
          <div className="people-image-text">
            <h3>Nithin Kamath</h3>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="people-text-container">
          <div className="people-heading">
            <h3>People</h3>
          </div>
          <div className="people-text">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <span className="blue">Homepage </span>/ <span className="blue">TradingQnA</span> <span className="blue">Twitter</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
