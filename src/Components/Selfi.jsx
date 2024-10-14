import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/selfi.css';

function Selfi() {
  const navigate = useNavigate();

  const handleProceedToPhoto = () => {
    // Navigate to the '/passport' route when the button is clicked
    navigate('/passport');
  };

  return (
    <div className="selfi-container">
      <div className="left-side">
        <p className="small-text">Visa on Mar 08, 09:55 PM</p>
        <h1 className='upload'>Upload or Take a Selfie</h1>
        <h5 className='photo'>The United Arab Emirates government <br/> requires your photo</h5>
        <img src="/images/selfi.png" alt="Selfie" className="loselfie-image"/>
        <div className="quick-tips">
          <p className="quick-tips-label">Quick tips:</p>
          <ul>
            <li>A well-lit area</li>
            <li>Maintain a neutral expression</li>
            <li>Remove glasses</li>
          </ul>
        </div>
        {/* Update the onClick handler */}
        <button className="proceed-button" onClick={handleProceedToPhoto}>
          Proceed to Photo
        </button>
      </div>
      <div className="right-side">
        <div className="right-box">
          <h1>Time for Your Close-Up</h1>
          <p>Your photo is important. Make sure your photo showcases your lovely smile, has a clear bright background, and your face is clearly visible.</p>
          <ul className="close-up-tips">
            <li>✅ Position your head in the oval</li>
            <li>✅ Make sure you’re in a well-lit area</li>
            <li>✅ Remove glasses</li>
            <li>✅ Avoid glares and blurs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Selfi;
