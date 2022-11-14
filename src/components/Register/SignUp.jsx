import { useState, useRef, useEffect } from "react";

import "./RegStyle.scss";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";

const SignUp = ({ setSignUpModal }) => {

  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState(false);

  const [errMsg, setErrMsg] = useState();
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pwd !== matchPwd) {
      return setErrMsg("Passwords do not match");
    }
    setLoading(true);
    try {
      setErrMsg("");
      await signup(email, pwd);
    } catch {
      setErrMsg("Failed to create an account");
    }
    setLoading(false);
    console.log(user, email, pwd);
  };
  
  return (
    <div className="overlay" onClick={() => setSignUpModal(false)}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">Username</label>
          <input
            type="text"
            id="user"
            placeholder="Name"
            onChange={(e) => setUser(e.target.value)}
            required
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            id="pwd"
            required
            onChange={(e) => setPwd(e.target.value)}
            autoComplete="off"
            placeholder="Password"
          />
          <label htmlFor="confirm_pwd">Confirm Password</label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            placeholder="Confirm password"
            required
          />
          <button type="submit" className="signup">
            SIGN UP
          </button>
          <div className="signin_footer">
            <p className="signin">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
