import React from "react";
import hamburger from "../../assets/icons/menu.png";
import bell from "../../assets/icons/bell.png";
import profile from "../../assets/icons/profile.png";
import "./header.css";

interface HeaderProps {
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <div className="header">
      <div className="header-left" onClick={onClick}>
        <img src={hamburger} alt="menu" />
      </div>
      <div className="header-right">
        <img src={bell} alt="notifications" />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
