// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Signup from "../signup/Signup.jsx";
// import { SignInAPI } from "../../Service/user.service.js";
// import { useNavigate } from "react-router-dom";

// const Login = ({ logIn, signUp }) => {
//   const [userSignin, setUserSignin] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const [emailError, setEmailError] = useState(false);
//   const [emailmessage, setEmailmessage] = useState("");
//   const [passwordError, setPasswordError] = useState(false);
//   const [passwordmessage, setPasswordmessage] = useState("");

//   const onSignin = (event) => {
//     setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
//   };

//   const SigninSuccess = () => {
//     //call signin api here
//     console.log("sign in");
//     SignInAPI(userSignin);
//     navigate("/DashBoard");
//   };
//   const handleSignin = (e) => {
//     e.preventDefault();
//     let emailRegex = RegExp(
//       "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-.]+[.][a-z A-Z 0-9 -]{2,}$"
//     );
//     let passwordRegex = RegExp(
//       "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
//     );

//     if (!emailRegex.test(userSignin.email)) {
//       setEmailmessage("Invalid credentials");
//       setEmailError(true);
//     } else {
//       setEmailmessage("");
//       setEmailError(false);
//     }
//     if (!passwordRegex.test(userSignin.password)) {
//       setPasswordmessage("Invalid credentials");
//       setPasswordError(true);
//     } else {
//       setPasswordmessage("");
//       setPasswordError(false);
//     }

//     if (!(emailError || passwordError)) {
//       SigninSuccess();
//     }
//   };
//   return (
//     <>
//       <div className="login-box">
//         <button className="login-btn" onClick={logIn}>
//           Login
//         </button>
//         <button className="login-btn signup-btn" onClick={signUp}>
//           Signup
//         </button>
//         <TextField
//           className="email-input"
//           id="outlined-basic"
//           label="Email Id"
//           variant="outlined"
//           size="small"
//           name="email"
//           value={userSignin.email}
//           error={emailError}
//           helperText={emailmessage}
//           onChange={onSignin}
//         />
//         <TextField
//           className="email-input password-input"
//           id="outlined-basic"
//           label="Password"
//           variant="outlined"
//           size="small"
//           name="password"
//           value={userSignin.password}
//           error={passwordError}
//           helperText={passwordmessage}
//           onChange={onSignin}
//         />
//         <a href="#" className="forgot-password">
//           Forgot Password
//         </a>
//         <button className="main-login-btn" onClick={handleSignin}>
//           Login
//         </button>
//         <div className="login-divider">
//           <hr className="dash-1" /> <p className="word-or">OR</p>{" "}
//           <hr className="dash-1 dash-2" />
//         </div>
//         <button className="faceBook-button">Facebook</button>
//         <button className="faceBook-button google-button">Google</button>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Signup from "../signup/Signup.jsx";
import { SignInAPI } from "../../Service/user.service.js";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  loginBox: {
    position: "absolute",
    top: "22vh",
    left: "50vw",
    width: "28vw",
    height: "425px",
    background: "#ffffff 0% 0% no-repeat padding-box",
    boxShadow: "0px 5px 15px #00000029",
    border: "1px solid #e4e4e4",
    borderRadius: "6px",
    opacity: 1,
  },
  loginDivider: {
    position: "absolute",
    top: "300px",
    left: "24%",
    opacity: "1",
  },
  loginBtn: {
    position: "absolute",
    top: "28px",
    left: "14%",
    height: "33px",
    textAlign: "left",
    font: "normal normal normal 25px/33px Roboto",
    border: "0",
    background: "white",
    fontWeight: "bold",
    lineHeight: "33px",
    letterSpacing: "0px",
    color: " #0a0102",
    textTransform: "uppercase",
    opacity: "1",
  },
  signupBtn: {
    position: "absolute",
    left: "58%",
  },
  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    loginBox: {
      left: "19vw",
      width: "65vw",
    },
    loginBtn: {
      fontSize: "93%",
    },
    signupBtn: {
      fontSize: "93%",
    },
  },
  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    loginBox: {
      width: "65vw",
      left: "19vw",
    },
    loginDivider: {
      left: "16%",
    },
  },
  ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
    loginBox: {
      width: "40vw",
      left: "50vw",
    },
  },
});
const Login = ({ logIn, signUp }) => {
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });
  const classes = useStyle();
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(false);
  const [emailmessage, setEmailmessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordmessage, setPasswordmessage] = useState("");

  const onSignin = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const SigninSuccess = () => {
    //call signin api here
    console.log("sign in");
    SignInAPI(userSignin);
    navigate("/DashBoard");
  };
  const handleSignin = (e) => {
    e.preventDefault();
    let emailRegex = RegExp(
      "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-.]+[.][a-z A-Z 0-9 -]{2,}$"
    );
    let passwordRegex = RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );

    if (!emailRegex.test(userSignin.email)) {
      console.log("mail validation error", emailError);
      setEmailmessage("Invalid credentials");
      console.log("email meassagee", emailmessage);
      const val = true;
      setEmailError(true);
      console.log("mail validation after", emailError);
    } else {
      setEmailmessage("");
      setEmailError(false);
      console.log("mail validation true");
    }
    if (!passwordRegex.test(userSignin.password)) {
      setPasswordmessage("Invalid credentials");
      setPasswordError(true);
    } else {
      setPasswordmessage("");
      setPasswordError(false);
    }

    if (!(emailError && passwordError)) {
      console.log("inside if emailerror passerror", emailError, passwordError);
      SigninSuccess();
    } else {
      console.log(
        " inside else emailerror passerror",
        emailError,
        passwordError
      );
    }
  };
  return (
    <>
      <div className={classes.loginBox}>
        <button className={classes.loginBtn} onClick={logIn}>
          Login
        </button>
        <button
          className={`${classes.loginBtn} ${classes.signupBtn}`}
          onClick={signUp}
        >
          Signup
        </button>
        <TextField
          className="email-input"
          id="outlined-basic"
          label="Email Id"
          variant="outlined"
          size="small"
          name="email"
          value={userSignin.email}
          error={emailError}
          helperText={emailmessage}
          onChange={onSignin}
        />
        <TextField
          className="email-input password-input"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          name="password"
          value={userSignin.password}
          error={passwordError}
          helperText={passwordmessage}
          onChange={onSignin}
        />
        <a href="#" className="forgot-password">
          Forgot Password
        </a>
        <button className="main-login-btn" onClick={handleSignin}>
          Login
        </button>
        <div className={classes.loginDivider}>
          <hr className="dash-1" /> <p className="word-or">OR</p>{" "}
          <hr className="dash-1 dash-2" />
        </div>
        <button className="faceBook-button">Facebook</button>
        <button className="faceBook-button google-button">Google</button>
      </div>
    </>
  );
};

export default Login;
