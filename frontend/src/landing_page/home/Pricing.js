import React from "react";

function Pricing() {
  return (
    <div className="HomePricingContainer">
      <div className="pricing">

        <div className="pricing-text">
          <div>
            <h2 className="pt-heading">Unbeatable pricing</h2>
          </div>
          <div>
            <p className="pt-para">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
          </div>
          <div>
            <a href="#" className="pt-button">
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="pricing-image">
          <div className="zerodiv">
            <img className="zero" src="/assets/images/pricingMF.svg" alt="homehero"></img>
            <div className="zero-text">Free account opening</div>
          </div>
          <div className="zerodiv">
            <img className="zero" src="/assets/images/pricingMF.svg" alt="homehero"></img>
            <div className="zero-text">
              Free equity delivery and direct mutual funds
            </div>
          </div>
          <div className="zerodiv">
            <img
              className="twenty"
              src="/assets/images/intradayTrades.svg"
              alt="homehero"
            ></img>
            <div className="twenty-text">Intraday and F&O</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
