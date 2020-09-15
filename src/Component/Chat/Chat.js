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
        <Avatar src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.0-9/33436044_214776529123681_8737639591051264000_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_eui2=AeH15af5Qajd-opaIfrGLCCX3NSdGbo_MPXc1J0Zuj8w9QmJk9sbo1zy2Mj74Bf6r7YHV6Yf5HzxSytC08jm-ZZQ&_nc_ohc=HJjX-Sdoc_sAX-5QVcb&_nc_oc=AQnHukh6fxpgmrsjqXQKjedQsLBoyRC3nqXP3t6p8mWUzowlAJfd3wbYFr26YKeuD9c&_nc_ht=scontent.fdac99-1.fna&oh=d98805fccb1a9f2576ab202166811372&oe=5F86C3E9" />
        <div className="chat__headerInfo">
          <h3>Anny</h3>
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
          <span className="chat__name">Anny</span>
          Tui onek joss
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Kabir</span>
          Na... Tui Onek Joss
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Anny</span>
          Na... Tui .....
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Kabir</span>
          Tui....
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Anny</span>
          Tui ... Tui ... Tui ...
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
