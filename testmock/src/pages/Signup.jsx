import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <input
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onSubmit}>Sign Up</button>
        <div>
          Already have account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </>
  );
};
