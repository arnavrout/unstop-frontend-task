// NewAssessmentForm.js

import React, { useState } from 'react';
import './NewAssessmentForm.css';

const NewAssessmentForm = ({ onClose }) => {
  const [showForm, setShowForm] = useState(true);

  //putting static input text in input fields
  const inputText = ({
    name: 'Type Here',
    purpose: 'Select',
    description: 'Select',
    skills: 'UI/UX and Design, No of Questions, Web Development,',
    duration: 'HH:MM:SS',
  });

  //handling form showing
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    onClose();
  };


  return (
    <div className="new-assessment-form">
      <h2>Create New Assessment
      <button className="close-button" onClick={onClose}>
          X
      </button>
      </h2>
      <hr className='seperate' />
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name of Assessment:</label>
            <input type="text"
            value={inputText.name}
            readOnly />
          </div>
          <div>
            <label>Purpose of Test:</label>
            <input type="text"
            value={inputText.purpose}
            readOnly />
          </div>
          <div>
            <label>Description:</label>
            <input type="text"
            value={inputText.description}
            readOnly />
            
          </div>
          <div>
            <label>Skills:</label>
            <textarea type="text"
            value={inputText.skills}
            readOnly />
          </div>
          <div>
            <label>Duration of Assessment:</label>
            <input type="text"
            value={inputText.duration}
            readOnly />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NewAssessmentForm;
