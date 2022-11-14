import "./NavbarStyle.scss";
import SignUp from "../Register/SignUp";
import Login from "../Register/Login";
import Logo from "../../assets/logo.png";
import Logout from "../Register/Logout";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  return (
    <header>
      <div className="title ">
        <img src={Logo} alt="logo" />
        <h2>
          TIC <br /> TAC <br /> TOE
        </h2>
      </div>
      <h3 className="user">{currentUser ? currentUser.email : "No user"}</h3>
      <div className="register">
        {currentUser ? (
          <button onClick={() => navigate("/logout")}>Logout</button>
        ) : (
          <>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
            <div className="line"></div>
            <button onClick={() => navigate("/login")}>Log In</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
