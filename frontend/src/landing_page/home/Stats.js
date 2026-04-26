import React from "react";

function Stats() {
  return (
    <div className="statsContainer">
      <h3>Trust with confidence</h3>
      <div className="content">
        <div className="content-text">
            
          <div className="para">
            <div className="heading">
              <h3>Customer-first always</h3>
            </div>
            <div className="para-para">
              <p>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>
          </div>

          <div className="para">
            <div className="heading">
              <h3>No spam or gimmicks</h3>
            </div>
            <div className="para-para">
              <p>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>
            </div>
          </div>

          <div className="para">
            <div className="heading">
              <h3>The Zerodha universe</h3>
            </div>
            <div className="para-para">
              <p>
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
          </div>

          <div className="para">
            <div className="heading">
              <h3>Do better with money</h3>
            </div>
            <div className="para-para">
              <p>
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
        </div>
        <div className="content-image">
            <img src="/assets/images/ecosystem.png" alt="zerodha-ecosystem"></img>
            <div className="explore-button">
              <a href="/">Explore our products <i class="fa-solid fa-arrow-right"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href="/">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
      </div>
      <div className="extra-image"><img src="/assets/images/pressLogos.png" alt="homehero"></img></div>
    </div>

  );
}

export default Stats;
