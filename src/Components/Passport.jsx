import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/passport.css';

function Passport() {
  const navigate = useNavigate();

  const handleProceedToForm = () => {
    // Navigate to the '/form' route when the button is clicked
    navigate('/form');
  };

  return (
    <div className="passport-container">
      <div className="left-side">
        <p className="small-text">Visa on Mar 08, 09:55 PM</p>
        <div className="upload-container">
          <h1 className="passport">Upload or Scan your Passport</h1>
          <p className="photos">The United Arab Emirates government requires front page of passport</p>
          <img src="/images/passport.jpeg" alt="passport" className="passport-image" />
          {/* Update the onClick handler */}
          <button className="proceed-button" onClick={handleProceedToForm}>
            Proceed to Photo
          </button>
        </div>
      </div>
      <div className="right-side">
        <div className="box">
          <h3>Passport Scan</h3>
          <p>We need a scan of your passport to make sure you are who you say you are.</p>
          <ul className="scan-tips">
            <li>✅ Open front/back page of passport</li>
            <li>✅ Align passport in frame</li>
            <li>✅ Avoid glares and blurs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Passport;
