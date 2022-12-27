import axios from "axios";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export const Home = () => {
  const [account, setAccount] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const profile = user;
        console.log(profile);
        setAccount(profile);
      }
    });
  }, []);

  const navigate = useNavigate();

  const Logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const CreatePlaylist = () => {
    axios
      .post("http://localhost:3001/lists", {
        title: "yolol",
        description: "String",
        CreatorId: account.uid,
        isPrivate: true,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div>
        <h1>Home page</h1>
        <div>
          <h2>EMAIL: {account && account.email}</h2>
          <h2>ID: {account && account.uid}</h2>
        </div>
        <button onClick={Logout}>Log Out</button>
        <button onClick={CreatePlaylist}>Create ur future</button>
      </div>
    </>
  );
};
