import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
} from "@material-ui/icons";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://www.vippng.com/png/detail/366-3660934_business-man-business-man-face-png.png" />
        <div className="chat__headerInfo">
          <h3>Tony</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Tony</span>
          Hello bro
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Kabir</span>
          Hey man Wassup!!
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type message" type="taxt" />
          <button type="submit">Send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
