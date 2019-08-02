import React from 'react';

const Appointment = ({apntmt}) => {
    return (
      <div className="appointment">
        <p>Pet: <span>{apntmt.pet}</span></p>
        <p>Owner: <span>{apntmt.owner}</span></p>
        <p>Date: <span>{apntmt.date}</span></p>
        <p>Hour: <span>{apntmt.hour}</span></p>
        <p>Symptoms: <span>{apntmt.symptoms}</span></p>
      </div>
    );
  }

export default Appointment;
