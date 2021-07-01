import React, { useEffect, useState } from "react";
import "./chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../firebase";

export const Chat = () => {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelMessages, setChannelMessages] = useState(null);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snapshot) => setChannelDetails(snapshot.data()));
    }
    db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setChannelMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [channelId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{channelDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
};
