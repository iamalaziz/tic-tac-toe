import { useRef, useState } from "react";
import "./RegStyle.scss";
import { IoMdLock } from "react-icons/io";
import { useAuth } from "../../context/Auth";
import {Link, useNavigate} from 'react-router-dom'

const Login = ({ setLoginModal }) => {
  const emailRef = useRef();
  const pwdRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      setError("");
      navigate("/");
      await login(emailRef.current.value, pwdRef.current.value);

    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  console.log(emailRef, pwdRef)

  return (
    <div className="overlay" onClick={() => setLoginModal(false)}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <h1>Login</h1>
        {error !== "" ? <div>{error}</div> : <p>No Error</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            ref={emailRef}
          />
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            id="pwd"
            placeholder="Enter password"
            ref={pwdRef}
          />
          <div className="remember">
            <input type="checkbox" id="rem" />
            <label htmlFor="rem">Remember me</label>
          </div>
          <button type="submit">LOGIN</button>
          <div className="signin_footer">
            <p className="reset_pwd">
              <IoMdLock /> Forgot your password?
            </p>
            <p>
              Create a new account <Link to="/signup">here</Link>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
