import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  //load appointments from storage
  let initialAppntmts = JSON.parse(localStorage.getItem('appointments'));

  if(!initialAppntmts) {
    initialAppntmts = [];
  }

  const [appointments, setAppointments] = useState(initialAppntmts);

  //add new appointments
  const createAppointment = nwApnt => {
    //get copy of current state
    const newAppointments = [...appointments, nwApnt];

    //store in state
    setAppointments(newAppointments);
  }

  //delete appointment from state
  const handleClick = index => {
    const newAppointments = [...appointments];

    newAppointments.splice(index, 1);
    setAppointments(newAppointments);

  }

  //only when appointtments change or component mounted
  useEffect(
    () => {
      //component mounted | updated
      let initialAppntmts = JSON.parse(localStorage.getItem('appointments'));

      if(initialAppntmts){
        localStorage.setItem('appointments', JSON.stringify(appointments));
      } else {
        localStorage.setItem('appointments', JSON.stringify([]));
      }
    }, [appointments]);

  //conditional header rendering
  const title = appointments.length === 0 ? 'No Appointments' : 'Manage Appointments';

  return (
    <Fragment>
      <h1>Patient Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>

          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((apntmt, index) => (
              <Appointment
                key={index}
                index={index}
                apntmt={apntmt}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
