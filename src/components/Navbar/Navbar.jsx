import React, { useState } from "react";
import "./NavbarStyle.scss";
import SignUp from "../Register/SignUp";
import Login from "../Register/Login";
import Logo from "../../assets/logo.png";
import Logout from "../Register/Logout";
import { useAuth } from "../../context/Auth";

const Navbar = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

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
          <button onClick={() => setLogoutModal(true)}>Logout</button>
        ) : (
          <>
            <button onClick={() => setSignUpModal(true)} className="signup-btn">
              Sign Up
            </button>
            <button onClick={() => setLoginModal(true)}>Log In</button>
          </>
        )}
      </div>
      {signUpModal ? <SignUp setSignUpModal={setSignUpModal} /> : null}
      {loginModal ? <Login setLoginModal={setLoginModal} /> : null}
      {logoutModal ? <Logout setLogoutModal={setLogoutModal} /> : null}
    </header>
  );
};

export default Navbar;
