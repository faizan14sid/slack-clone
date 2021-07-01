import React from "react";
import "./header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="faizan" src="" />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <input placeholder="search product engineering" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};
