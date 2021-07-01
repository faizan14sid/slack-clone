import React from "react";
import "./sidebarOption.css";

export const SidebarOption = ({ Icon, title, Iconright }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span>
          {title}{" "}
        </h3>
      )}
      {Iconright && <Iconright className="sidebarOption_iconright" />}
    </div>
  );
};
