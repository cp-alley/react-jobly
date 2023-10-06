import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import "./LoginForm.css"

/** Render form for login
 *
 * Props:
 *  -loginUser
 *
 *  State:
 *   -formData
 *   -alerts
 *
 *  /login -> LoginForm
 */
function LoginForm({ loginUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [alerts, setAlerts] = useState(null);

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await loginUser(formData);
      navigate("/");
    } catch (err) {
      console.log("err=", err)
      setAlerts(err);
    }
  }

  function renderAlerts(alerts) {
    return (
      <div className="Alert-container">
        <Alert message={alerts[0].message} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <h2>Welcome back</h2>
      <div className="LoginForm-field">

      <label htmlFor="username" className="LoginForm-label">Username</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        type="text"
        onChange={handleChange}
        placeholder="Username"
        className="LoginForm-input">
      </input>
      </div>
      <div className="LoginForm-field">

      <label htmlFor="password" className="LoginForm-label">Password</label>
      <input
        id="password"
        name="password"
        value={formData.password}
        type="password"
        onChange={handleChange}
        placeholder="Password"
        className="LoginForm-input">
      </input>
      </div>
      <button type="submit" className="LoginForm-button">Login</button>
      {alerts && renderAlerts(alerts)}
    </form>
  );
}

export default LoginForm;