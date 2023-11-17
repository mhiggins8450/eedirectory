import React from 'react';
import employeesData from '../employeeData';

const RightSide = () => {
  const selectedEmployee = employeesData[0];

  return (
    <div className="right-side">
      <h2>Employee</h2>
      <div className="employee-info">
        <div className="employee-section">
          <img
            src={selectedEmployee.imageUrl}
            alt={`${selectedEmployee.firstName} ${selectedEmployee.lastName}`}
            className="employee-img"
          />
          <div className="employee-details">
            <h3>{`${selectedEmployee.firstName} ${selectedEmployee.lastName}`}</h3>
            <p>{selectedEmployee.title}</p>
          </div>
        </div>
        <div className="employee-section">
          <div className="info-section">
            <p><strong>Call Office</strong></p>
            <p>212.555.1212</p>
          </div>
        </div>
        <div className="employee-section">
          <div className="info-section">
            <p><strong>Call Mobile</strong></p>
            <p>212.555.1212</p>
          </div>
        </div>
        <div className="employee-section">
          <div className="info-section">
            <p><strong>SMS</strong></p>
            <p>212.555.1212</p>
          </div>
        </div>
        <div className="employee-section">
          <div className="info-section">
            <p><strong>Email</strong></p>
            <p>fake@fake.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
