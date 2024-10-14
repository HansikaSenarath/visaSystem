import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/payment.css';

function Payment() {
  const navigate = useNavigate();

  // Function to handle navigation to the 'pay' route
  const handleProceedToPay = () => {
    navigate('/pay');
  };

  return (
    <div className="payment-container">
      <div className="left-side">
        <img src="/images/amarica.png" alt="visa" className="visa-image" />
        <div className="button-box">
          <button className="proceed-button1" onClick={handleProceedToPay}>
            Proceed to Pay
          </button>
        </div>
      </div>
      <div className="right-side">
        <h1>Almost There</h1>
        <p>Ready for the final step? Our secure checkout is smooth and easy, and accepts all major forms of payment. Once you’re done, start planning for your exciting journey!</p>
      </div>
    </div>
  );
}

export default Payment;
