import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "./login.css";
export const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt=""
        />
        <h1>Sign in to slack-clone</h1>
        <p>Created by Faizan</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};
