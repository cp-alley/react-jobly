import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import "./SignupForm.css";

/** SignupForm
 *
 * Props:
 * -signUp
 *
 * State:
 * -formData
 * -alerts
 *
 * /signup -> SignupForm
 */
function SignUpForm({ signUp }) {
  const [formData, setFormData] = useState(
    {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    }
  );
  const [alerts, setAlerts] = useState(null);

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signUp(formData);
      navigate("/");
    } catch (err) {
      setAlerts(err);
    }
  }

  function renderAlerts(alerts) {
    return (
      <div className="Alert-container">
        {alerts[0].message.map((a, i) =>
        <Alert key={i} message={a} />)}
      </div>
    );
  }

  return (

    <form onSubmit={handleSubmit} className="SignupForm">
      <h2>Welcome to Jobly</h2>
      {console.log("alerts=", alerts)}
      <div className="SignupForm-field">
        <label htmlFor="username" className="SignupForm-label">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          type="text"
          onChange={handleChange}
          placeholder="Username" className="SignupForm-input">
        </input>
      </div>
      <div className="SignupForm-field">
        <label htmlFor="password" className="SignupForm-label">Password</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          type="password"
          onChange={handleChange}
          placeholder="Password" className="SignupForm-input">
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
      {alerts && renderAlerts(alerts)}
    </form>

);

}

export default SignUpForm;