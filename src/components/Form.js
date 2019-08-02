import React, {useState, Fragment} from 'react';

const Form = ({createAppointment}) => {

    const initialState = {
      pet : '',
      owner : '',
      date : '',
      hour : '',
      symptoms : ''
    };
  
    const [appointment, setAppointment] = useState(initialState);
  
    const handleChange = e => {
      //update state
      setAppointment({
        ...appointment,
        [e.target.name] : e.target.value
      })
  
    }
  
    const handleSubmit = e => {
      //send appointment to App.js
      e.preventDefault();
  
      //send data
      createAppointment(appointment);
  
      //refresh state
      setAppointment(initialState);
    }
  
    return (
      <Fragment>
        <h2>Create Appointment</h2>
  
        <form
          onSubmit={handleSubmit}
        >
          <label>Pet's Name</label>
          <input 
            type="text" 
            name="pet"
            className="u-full-width" 
            placeholder="Pet's Name" 
            onChange={handleChange}
            value={appointment.pet}
          />
  
          <label>Owner's Name</label>
          <input 
            type="text" 
            name="owner"
            className="u-full-width"  
            placeholder="Owner's Name"
            onChange={handleChange}
            value={appointment.owner}
          />
  
          <label>Date</label>
          <input 
            type="date" 
            className="u-full-width"
            name="date"
            onChange={handleChange}
            value={appointment.date}
          />               
  
          <label>Hour</label>
          <input 
            type="time" 
            className="u-full-width"
            name="hour" 
            onChange={handleChange}
            value={appointment.hour}
          />
  
          <label>Symptoms</label>
          <textarea 
            className="u-full-width"
            name="symptoms"
            onChange={handleChange}
            value={appointment.symptoms}
          ></textarea>
  
          <button type="submit" className="button-primary u-full-width">Create</button>
        </form>
    </Fragment>
    );
}

export default Form;