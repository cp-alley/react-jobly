import "./Alert.css";

/** Render an alert message
 *
 *  Props:
 *  -message
 *
 *  (LoginForm, SignUpForm, ProfileForm) -> Alert
 */

function Alert({ message }) {
  let text = message;
  text = text.replace('instance.', '');
  return <p className="Alert">{text}</p>;
}

export default Alert;