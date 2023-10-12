import { useState } from "react";
import { RiUser6Line, RiKey2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  return (
    <div className="auth-modal-form-container">
      <div className="single-auth-input-box">
        <div className="saib-icon">
          <RiUser6Line />
        </div>
        <input type="text" name="name" placeholder="Your name" required />
      </div>
      <div className="single-auth-input-box">
        <div className="saib-icon">
          <MdOutlineMail />
        </div>
        <input type="text" name="email" placeholder="Email" required />
      </div>
      <div className="single-auth-input-box sai-pass-box">
        <div className="saib-icon">
          <RiKey2Line />
        </div>
        <input
          type={passShow ? "text" : "password"}
          name="password"
          placeholder="Password"
          required
        />
        <div onClick={() => setPassShow(!passShow)}>
          {passShow ? "Hide" : "Show"}
        </div>
      </div>
      <div className="single-auth-input-box">
        <div className="saib-icon">
          <RiKey2Line />
        </div>
        <input
          type={passShow ? "text" : "password"}
          name="confirm-password"
          placeholder="Confirm password"
          required
        />
      </div>
      <button className="auth-from-submit-btn" type="submit">
        Create Account
      </button>
    </div>
  );
};

export default Register;
