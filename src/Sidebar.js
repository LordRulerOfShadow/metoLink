import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import AltRouteRoundedIcon from '@mui/icons-material/AltRouteRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Search" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={AltRouteRoundedIcon} text="RoadMaps" />
      <SidebarOption Icon={ContactPageRoundedIcon} text="Resume Review" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Mentorship" />
      <SidebarOption
        Icon={ListAltIcon}
        text="AI Mock Interview"
        onClick={() => window.open('https://www.witmyworld.com', '_blank')}
      />
      <SidebarOption Icon={MoreHorizIcon} text="Webinar" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Book Now
      </Button>
    </div>
  );
}

export default Sidebar;
