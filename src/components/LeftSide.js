import React from 'react';
import employeesData from '../employeeData';

const LeftSide = () => {
  return (
    <div className="left-side">
      <h2>Employee Directory</h2>
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="employee-listings">
        {employeesData.map((employee, index) => (
          <div key={index} className="employee-section">
            <h3>{`${employee.firstName} ${employee.lastName}`}</h3>
            <p>{employee.title}</p>
            <img src={employee.imageUrl} alt={`${employee.firstName} ${employee.lastName}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
