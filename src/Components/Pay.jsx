import React from 'react';
import '../Components/pay.css';

function Pay() {
  return (
    <div className="pay-container">
      <form className="card-form">
      <div className="secure-text">
        <p>Secure, 1-click checkout with Link</p>
      </div>
        {/* Add your card details form fields here */}
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" required />

        <div className="expiry-cvc-fields">
          <label htmlFor="expiryDate">Expiration:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />

          <label htmlFor="cvv">CVC:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>

        <label htmlFor="country">Country:</label>
        <select id="country" name="country" required>
          <option value="srilanka">Sri Lanka</option>
          <option value="india">India</option>
          <option value="china">China</option>
          {/* Add more country options as needed */}
        </select>

        <button type="button" className="pay-button">PAY LKR 20000</button>
      </form>
    </div>
  );
}

export default Pay;
