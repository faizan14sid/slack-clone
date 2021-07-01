import React from "react";
import "./sidebar.css";
import FibeManualReacordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import { SidebarOption } from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Product Engineering</h2>
          <h3>
            <FibeManualReacordIcon />
            Faizan Ahmad Siddiqui
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption title="community" />
    </div>
  );
};
