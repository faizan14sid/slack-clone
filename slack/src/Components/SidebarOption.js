import React from "react";
import "./sidebarOption.css";

export const SidebarOption = ({ Icon, title }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? <h3>{title}</h3> : <h3># {title} </h3>}
    </div>
  );
};
