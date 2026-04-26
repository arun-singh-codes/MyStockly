import React from "react";

function Pricing() {
  return (
    <div className="HomePricingContainer">
      <div className="pricing">

        {/* TEXT SECTION */}
        <div className="pricing-text">
          <h2 className="pt-heading">Unbeatable pricing</h2>

          <p className="pt-para">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="/pricing" className="pt-button">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* FEATURES SECTION */}
        <div className="pricing-image">

          <div className="zerodiv">
            <img
              className="zero"
              src="/assets/images/pricingMF.svg"
              alt="Free account opening"
            />
            <div className="zero-text">Free account opening</div>
          </div>

          <div className="zerodiv">
            <img
              className="zero"
              src="/assets/images/pricingMF.svg"
              alt="Free equity delivery"
            />
            <div className="zero-text">
              Free equity delivery and direct mutual funds
            </div>
          </div>

          <div className="zerodiv">
            <img
              className="twenty"
              src="/assets/images/intradayTrades.svg"
              alt="Intraday trading"
            />
            <div className="twenty-text">Intraday and F&O</div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Pricing;