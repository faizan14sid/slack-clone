import React from "react";
import "./sidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";

export const SidebarOption = ({ Icon, title, Iconright,id, addChannelOption }) => {

  const history = useHistory();
   const selectChannel =()=>{
     if (id) {
       history.push(`/channel/${id}`)
     }
     else {
       history.push('title')
     }
   };
   const addChannel = ()=>{
     const channelName = prompt("please enter a channel name")

     if (channelName){
       db.collection("channels").add({
         name: channelName
       })
     }
   }

  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
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
