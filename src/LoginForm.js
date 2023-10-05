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
 *
 *  /login -> LoginForm
 */
function LoginForm({ loginUser, alert }) {
  const [formData, setFormData] = useState({ username: "testtest", password: "password" });

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({ ...formData, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
      await loginUser(formData);
    }catch(err){
      console.log(err, "err in loginForm")
    }
    //navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      {alert && <Alert message={alert} />}
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