import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth } from "../../setup/slices/headerSlice";
import "./AuthModal.css";
import Login from "./Login";
import Register from "./Register";

const AuthModal = () => {
  const { authOpen } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    if (authOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [authOpen]);

  return (
    <div
      className={`auth-modal ${authOpen}`}
      onClick={() => dispatch(toggleAuth())}
    >
      <div
        className="auth-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="auth-modal-tabs-container">
          <div
            className={`single-auth-modal-tab ${activeTab === "login"}`}
            onClick={() => setActiveTab("login")}
          >
            Sign in
          </div>
          <div
            className={`single-auth-modal-tab ${activeTab === "register"}`}
            onClick={() => setActiveTab("register")}
          >
            New account
          </div>
        </div>
        <form>{activeTab === "login" ? <Login /> : <Register />}</form>
      </div>
    </div>
  );
};

export default AuthModal;
