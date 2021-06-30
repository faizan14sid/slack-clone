import React from "react";
import "./header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

export const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="faizan" src="" />
        <AccessTimeIcon />
      </div>
      <div className="header_search">search icon and input</div>
      <div className="header_right">help icon</div>
    </div>
  );
};
