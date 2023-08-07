import {Component} from 'react'

import './index.css'

const registrationState = {
  initial: 'INITIAL',
  closed: 'REGISTRATIONS_CLOSED',
  register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
}

class ActiveEventRegistrationDetails extends Component {
  registrationClosedView = () => (
    <div className="reg-card">
      <img
        className="closed-view"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h2>Registrations Are Closed Now!</h2>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  registrationRegisterView = () => (
    <div className="reg-card">
      <img
        className="register-view"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="reg-btn" type="button">
        Register Here
      </button>
    </div>
  )

  registrationRegisteredView = () => (
    <div className="reg-card">
      <img
        className="registered-view"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h2>You have already Registered for the event</h2>
    </div>
  )

  render() {
    const {registrationStatus} = this.props

    switch (registrationStatus) {
      case registrationState.closed:
        return this.registrationClosedView()
      case registrationState.register:
        return this.registrationRegisterView()
      case registrationState.registered:
        return this.registrationRegisteredView()
      default:
        return <p>Click on an event, to view its registration details</p>
    }
  }
}
export default ActiveEventRegistrationDetails
