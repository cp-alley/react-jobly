import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

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
  const [formData, setFormData] = useState({ username: "testtest", password: "password" });
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
      setAlerts(err.map(e => e.message));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {alerts && alerts.map((a, i) => <Alert key={i} message={a} />)}
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        type="text"
        onChange={handleChange}
        placeholder="Username">
      </input>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        value={formData.password}
        type="password"
        onChange={handleChange}
        placeholder="Password">
      </input>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;