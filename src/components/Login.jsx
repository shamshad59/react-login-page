import React, {useState} from "react";
import './Login.css';
import userIcon from '../assets/images/person.png';
import emailIcon from '../assets/images/email.png';
import passwordIcon from '../assets/images/password.png';

const LoginPage = () => {

  const [action,setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="input-box">
        {action==="Login"?<div></div>: <div className="input-items">
          <img src={userIcon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}
        <div className="input-items">
          <img src={emailIcon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input-items">
          <img src={passwordIcon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click here!</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginPage;