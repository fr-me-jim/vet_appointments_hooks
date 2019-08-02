import React, {useState, Fragment} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  const [appointments, setAppointments] = useState([]);

  //add new appointments
  const createAppointment = nwApnt => {
    //get copy of current state
    const newAppointments = [...appointments, nwApnt];

    //store in state
    setAppointments(newAppointments);
  }

  return (
    <Fragment>
      <h1>Patient Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>

          <div className="one-half column">
            {appointments.map((apntmt, index) => (
              <Appointment
                key={index}
                index={index}
                apntmt={apntmt}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
