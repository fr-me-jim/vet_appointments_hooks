import React, {useState, Fragment} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';
import { appendFile } from 'fs';

function App() {

  const [appointments, setAppointments] = useState([]);

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
