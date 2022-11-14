import { useState } from "react";

import "./RegStyle.scss";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle, HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [matchPwd, setMatchPwd] = useState(false);

  const [errMsg, setErrMsg] = useState();
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pwd !== matchPwd) {
      return setErrMsg("Passwords do not match");
    }
    setLoading(true);
    try {
      setErrMsg("");
      await signup(email, pwd);
      navigate("/");
    } catch {
      setErrMsg("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="overlay" onClick={() => navigate("/")}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <HiOutlineUserCircle />
            <input
              type="text"
              id="user"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="textbox">
            <HiOutlineMail />
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <MdLockOutline />
            <input
              type="password"
              id="pwd"
              required
              onChange={(e) => setPwd(e.target.value)}
              autoComplete="off"
              placeholder="Password"
            />
          </div>
          <div className="textbox">
            <MdLockOutline />
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>
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
