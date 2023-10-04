import { useState } from "react";

/** Render form for login
 *
 *  State:
 *   -formData
 *
 *  /login -> LoginForm
 */
function LoginForm ({loginUser}) {
  const[formData, setFormData] = useState({username: "", password: ""})

  function handleChange(evt){
    const {name, value} = evt.target
    setFormData(curr => ({...formData, [name]:value}))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    loginUser(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username"  name="username" value={formData.username} type="text" onChange={handleChange} placeholder="Username"></input>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" value={formData.password} type="password" onChange={handleChange} placeholder="Password"></input>
      <button>Login</button>
    </form>
  )
}

export default LoginForm;