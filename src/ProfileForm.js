import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import userContext from "./userContext";
import "./ProfileForm.css";

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
    <form onSubmit={handleSubmit} className="ProfileForm">
      <h2>Edit your profile</h2>
      {alerts && alerts.map((a, i) => <Alert key={i} message={a} />)}
      <div className="ProfileForm-field">
        <label htmlFor="username" className="ProfileForm-label">Username</label>
        <input
          id="username"
          name="username"
          value={currentUser.userData.username}
          type="text"
          placeholder="Username"
          className="ProfileForm-input"
          disabled>
        </input>
      </div>

      <div className="ProfileForm-field">
        <label htmlFor="firstName" className="ProfileForm-label">First Name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          type="text"
          onChange={handleChange}
          placeholder="First name" className="ProfileForm-input">
        </input>
      </div>
      <div className="ProfileForm-field">
        <label htmlFor="lastName" className="ProfileForm-label">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          type="text"
          onChange={handleChange}
          placeholder="Last name" className="ProfileForm-input">
        </input>
      </div>
      <div className="ProfileForm-field">
        <label htmlFor="email" className="ProfileForm-label">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          type="text"
          onChange={handleChange}
          placeholder="Email" className="ProfileForm-input">
        </input>
      </div>
      <button type="submit" className="ProfileForm-button">Save changes</button>
    </form>

  );

}

export default ProfileForm;