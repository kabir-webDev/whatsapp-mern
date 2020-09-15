import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.0-9/117276133_2630311607230698_6241231218693507486_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeG0wQYym1M5-exw-7js2QNVJQMVeRSyNpglAxV5FLI2mASPrq9wxtQdy9-nTdKaQ7AuCVrq5Tqo3igpjD11hLYM&_nc_ohc=cMrlQHkqbwEAX9w5srj&_nc_ht=scontent.fdac99-1.fna&oh=7be108442194b1ebb84d05ac9f71eb5a&oe=5F85E254" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or Start a new Chat" type="text" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
