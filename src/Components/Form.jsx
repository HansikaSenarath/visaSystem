import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/form.css';

function Form() {
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    // Navigate to the '/payment' route when the button is clicked
    navigate('/Payment');
  };

  return (
    <div className="form-container">
      <div className="left-side">
        <p className="date">Visa on Mar 08, 11:06 PM</p>
        <h2 className='upload'>Review your information</h2>
        <span className="blue-highlight">Visa Validity</span>
        <p>Personal Information</p>
        <form>
          <div className="name-fields">
            <label>
              First Name:
              <input type="text" name="firstName" />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" />
            </label>
          </div>
          <div className="name-fields">
            <label>
              Gender:
              <select name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <label>
              Passport Number:
              <input type="text" name="passportNumber" />
            </label>
          </div>
          <div className="name-fields">
            <label>
              Date of Birth:
              <input type="date" name="dob" />
            </label>
            <label>
              Passport Issued On:
              <input type="date" name="issuedOn" />
            </label>
          </div>
          <label>
            Passport Valid Till:
            <input type="date" name="validTill" />
          </label>
          <p className="blue-highlight">Documents Submitted</p>
          <div className="submitted-images">
            <img src="/images/f1.png" alt="Document 1" className="document-image" />
            <img src="/images/f2.png" alt="Document 2" className="document-image" />
          </div>
          <div className='protext'>
            <p className='progresstext'>Progress auto saved</p>
            </div>
            <button className="submit-documents-button" onClick={handleProceedToPayment}>
        Submit Documents
      </button>
        </form>
      </div>
      <div className="right-side">
      <div className="box">
        <h3>Personal Details</h3>
        <p>We need some personal details to make sure you get your visa on time.</p>
      </div>
    </div>
    </div>
  );
}

export default Form;
