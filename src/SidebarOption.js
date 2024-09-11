import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon, onClick }) {
  return (
    <div 
      className={`sidebarOption ${active && "sidebarOption--active"}`} 
      onClick={onClick} // Add onClick handler here
      style={{ cursor: 'pointer' }} // Optional: Makes it clear that it's clickable
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
