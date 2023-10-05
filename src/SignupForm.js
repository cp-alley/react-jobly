import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

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

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        type="text"
        onChange={handleChange}
        placeholder="First name">
      </input>

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        value={formData.lastName}
        type="text"
        onChange={handleChange}
        placeholder="Last name">
      </input>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={formData.email}
        type="text"
        onChange={handleChange}
        placeholder="email">
      </input>

      <button type="submit">SignUp</button>
    </form>
  );

}

export default SignUpForm;