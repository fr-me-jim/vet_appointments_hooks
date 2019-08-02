import React from 'react';

const Appointment = ({apntmt, index, handleClick}) => {

    return (
      <div className="appointment">
        <p>Pet: <span>{apntmt.pet}</span></p>
        <p>Owner: <span>{apntmt.owner}</span></p>
        <p>Date: <span>{apntmt.date}</span></p>
        <p>Hour: <span>{apntmt.hour}</span></p>
        <p>Symptoms: <span>{apntmt.symptoms}</span></p>
        <button 
            onClick={() => handleClick(index)}
            type="submit" className="button delete u-full-width"
        > X Delete </button>
      </div>
    );
  }

export default Appointment;
