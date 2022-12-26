import { useState } from "react";

export const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <>
      <h1>Log In</h1>
      <div>
        <input placeholder="enter your email" />
        <input placeholder="enter your password" />
        <button>Log in</button>
      </div>
    </>
  );
};
