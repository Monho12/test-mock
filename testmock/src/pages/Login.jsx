import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const Login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("log in to ", user.uid);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <h1>Log In</h1>
      <div>
        <input
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={Login}>Log in</button>
        <div>
          Dont have account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};
