import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import userContext from "./userContext";

/** Display user edit form
 *
 *  State:
 *   - formData
 *   - alerts
 *
 *  /profile -> ProfileForm
 */
function ProfileForm ({ editUser }) {
  const {currentUser} = useContext(userContext)
  const [formData, setFormData] = useState(getInitialFormData);
  const [alerts, setAlerts] = useState(null);

  const navigate = useNavigate();

  function getInitialFormData(){
    let data = {...currentUser.userData}
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await editUser(currentUser.userData.username, formData);
      navigate("/");
    } catch (err) {
      setAlerts(err.map(e => e.message));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="SignupForm">
      <h2>Edit your profile</h2>
      {alerts && alerts.map((a, i) => <Alert key={i} message={a} />)}
      <div className="SignupForm-field">
        <label htmlFor="username" className="SignupForm-label">Username</label>
        <input
          id="username"
          name="username"
          value={currentUser.userData.username}
          type="text"
          placeholder="Username"
          className="SignupForm-input"
          disabled>
        </input>
      </div>

      <div className="SignupForm-field">
        <label htmlFor="firstName" className="SignupForm-label">First Name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          type="text"
          onChange={handleChange}
          placeholder="First name" className="SignupForm-input">
        </input>
      </div>
      <div className="SignupForm-field">
        <label htmlFor="lastName" className="SignupForm-label">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          type="text"
          onChange={handleChange}
          placeholder="Last name" className="SignupForm-input">
        </input>
      </div>
      <div className="SignupForm-field">
        <label htmlFor="email" className="SignupForm-label">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          type="text"
          onChange={handleChange}
          placeholder="Email" className="SignupForm-input">
        </input>
      </div>
      <button type="submit" className="SignupForm-button">SignUp</button>
    </form>

  );

}

export default ProfileForm;