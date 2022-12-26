import { useState } from "react";

export const Signup = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <input placeholder="enter your email" />
        <input placeholder="enter your password" />
        <button>Sign Up</button>
      </div>
    </>
  );
};
