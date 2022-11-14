import "./RegStyle.scss";
import { useState } from "react";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";

const Logout = ({ setLogoutModal }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { currrentUser, logout } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  };
  return (
    <div className="overlay" onClick={() => navigate("/")}>
      {error !== "" && alert(error)}
      <div className="logout">
        <p>Are you sure to logout?</p>
        <div className="btn-container">
          <button onClick={() => setLogoutModal(false)}>Cancel</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
