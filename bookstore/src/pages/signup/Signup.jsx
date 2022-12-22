import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { SignUpAPI } from "../../Service/user.service";

const Signup = ({ logIn, signUp }) => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const [fullnameError, setFullnameError] = useState(false);
  const [fullnamemessage, setFullnamemessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailmessage, setEmailmessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordmessage, setPasswordmessage] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [mobilemessage, setMobilemessage] = useState("");

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const SignupSuccess = () => {
    //call signup api here
    console.log("Signup api calling");
    SignUpAPI(userDetails);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(userDetails);
    let nameRegex = RegExp("^[A-Z]{1}[a-z A-Z]{2,}$");
    let emailRegex = RegExp(
      "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-.]+[.][a-z A-Z 0-9 -]{2,}$"
    );
    let passwordRegex = RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );

    let mobileNumRegex = RegExp("[6-9]{1}[0-9]{9}$");

    if (!nameRegex.test(userDetails.fullName)) {
      setFullnamemessage("Invalid firstname");
      setFullnameError(true);
    } else {
      setFullnamemessage("");
      setFullnameError(false);
    }
    if (!emailRegex.test(userDetails.email)) {
      setEmailmessage("Invalid email type");
      setEmailError(true);
    } else {
      setEmailmessage("");
      setEmailError(false);
    }
    if (!passwordRegex.test(userDetails.password)) {
      setPasswordmessage("Invalid password");
      setPasswordError(true);
    } else {
      setPasswordmessage("");
      setPasswordError(false);
    }

    if (!mobileNumRegex.test(userDetails.mobileNumber)) {
      setMobilemessage("Invalid mobile number type");
      setMobileError(true);
    } else {
      setMobilemessage("");
      setMobileError(false);
    }

    if (!(fullnameError || emailError || passwordError || mobileError)) {
      SignupSuccess();
    }
  };
  return (
    <>
      <div className="login-box">
        <button className="login-btn" onClick={logIn}>
          Login
        </button>
        <button className="login-btn signup-btn" onClick={signUp}>
          Signup
        </button>
        <TextField
          className="email-input"
          id="outlined-basic"
          label="Full name"
          variant="outlined"
          size="small"
          name="fullName"
          value={userDetails.fullName}
          onChange={handleChange}
          error={fullnameError}
          helperText={fullnamemessage}
        />
        <TextField
          className="email-input mail-input"
          id="outlined-basic"
          label="email Id"
          variant="outlined"
          size="small"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          error={emailError}
          helperText={emailmessage}
        />
        <TextField
          className="email-input passW-input"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
          error={passwordError}
          helperText={passwordmessage}
        />{" "}
        <TextField
          className="email-input Mobilenum-input"
          id="outlined-basic"
          label="Mobile number "
          variant="outlined"
          size="small"
          name="mobileNumber"
          value={userDetails.mobileNumber}
          onChange={handleChange}
          error={mobileError}
          helperText={mobilemessage}
        />
        <button className="main-Signup-btn" onClick={handleCreate}>
          Signup!!
        </button>
      </div>
    </>
  );
};
export default Signup;
