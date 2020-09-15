import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import "./Chat.css";
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.0-9/116881408_2626876544240871_1412701322965065156_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_eui2=AeEpAWUd91KI9mk7noiRSQ-2XCWIPRhCiL1cJYg9GEKIvW2S8lHUYHPJQIXFggIi-gwxvR_bMiqHVExg6qJNxa8V&_nc_ohc=LN5lov5OEfcAX87Whv9&_nc_ht=scontent.fdac99-1.fna&oh=e5ec466cbaaaa9b42f4f3443dbcb0869&oe=5F84ECEB" />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
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
    </div>
  );
}

export default Chat;
