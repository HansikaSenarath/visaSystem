import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/application.css';

function Application() {
  const [travelersCount, setTravelersCount] = useState(1);
  const navigate = useNavigate();

  const increaseTravelersCount = () => {
    setTravelersCount(travelersCount + 1);
  };

  const handleStartApplication = () => {
    // Navigate to the '/selfi' route when the button is clicked
    navigate('/selfi');
  };

  return (
    <div className="application-container">
      {/* Left Side */}
      <div className="left-side">
        <img src="/images/application.png" alt="application" className="application-image"/>
        <p className="authorized-text">Atlys is Officially Authorized by Government of Dubai</p>
        <p className="apply-now-text">Apply now for guaranteed visa</p>
        <p className="application-date">March 12, 2024 at 08:45</p>
      </div>

      {/* Right Side */}
      <div className="right-side">
        <div className="application-box">
          <p className="application-info">
            Visa guaranteed <br />
            March 12, 2024 at 08:45
          </p>
          <div className="travelers-section">
            <p className="travelers-text">Travellers</p>
            <div className="travelers-count">
              <span>{travelersCount}</span>
            </div>
          </div>
          <hr className="hr-line" />
          <p className="price-section">
            Price: <span>RS 270000</span>
          </p>
          <p className="total-amount-section">
            Total Amount: <span>RS 270000</span>
          </p>
          {/* Update the onClick handler */}
          <button className="start-application-button" onClick={handleStartApplication}>
            Start Application
          </button>
        </div>
        <img src="/images/g.png" alt="Start Application" className="start-application-image"/>
      </div>
    </div>
  );
}

export default Application;
